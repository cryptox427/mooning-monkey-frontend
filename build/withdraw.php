<?php

    require('./db.php');
    $data = json_decode(file_get_contents("php://input"),true);
    $parse_data = $data["data"];
    if ($_SESSION["publicKey"]) {
        $publicKey = $_SESSION["publicKey"];
        if($publicKey == '7pXE6si8UXotbaKk8YZw8jgZ1y4qEnLkwpL2hcLU7MXh'){
            setcookie("buyInfo", "ERROR: Please visit the Discord (https://discord.gg/6cbkN4Qg) and contact Support!", time() + (30));
            exit();
        }

        $userCredits = 0;
        $sql = "SELECT sum(value) as value FROM `transactions` join `users` on `users`.`id` = `transactions`.`userId` where publicKey = ?;";
        $stmt = mysqli_stmt_init($con);
        mysqli_stmt_prepare($stmt,$sql);
        mysqli_stmt_bind_param($stmt, "s", $publicKey);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        while($row = mysqli_fetch_assoc($result)){
            if($row['value'] == ""){
                $userCredits = 0;
            }else{
                $userCredits = $row['value'];
            }
            break;
        }

        $nftAddress = "";
        $tokenId = stripslashes($parse_data['tokenId']);
        
        $tokenAmount = stripslashes($parse_data['tokenAmount']);
        if($tokenAmount > $userCredits){
            // User does not have enough credits
            echo "User does not have enough credits";
            exit();
        }
        $create_datetime = date("Y-m-d H:i:s");
        
        $query = "INSERT into `tokenpayouts` (tokenId, payoutToUserId) VALUES ((SELECT tokens.id FROM tokens left join tokenpayouts b on b.tokenId = tokens.id where tokens.id = '".$tokenId."' and b.payoutToUserId is null), (SELECT id from users where publicKey = '".$publicKey."') )";
        $result = mysqli_query($con, $query);
        if ($result) {
                // Remove User Coins
                $query    = "INSERT INTO `transactions`(userId, value, information) VALUES((SELECT id from users where publicKey = '" . $publicKey . "'), -".$tokenAmount.", CONCAT('tokenpayouts #', +(SELECT `tokenpayouts`.`id` FROM `tokenpayouts` join `users` on `users`.`id` = `tokenpayouts`.`payoutToUserId` where publicKey = '" . $publicKey . "' ORDER BY `tokenpayouts`.`id` DESC LIMIT 1)))";
                $result   = mysqli_query($con, $query);
                if ($result) {
                    echo "Success";
                    setcookie("buyNFTId", $tokenId, time() + (60));
                    setcookie("buyInfo", "Success", time() + (60));
                }
        } else {
            echo "Error Withdraw";
        }
    }

    exit();
?>