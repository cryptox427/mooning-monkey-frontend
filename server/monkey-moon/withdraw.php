<?php

    require('../db.php');
    echo json_encode($_SESSION);
    if (isset($_SESSION['publicKey']) ) {

        echo "User has enough credits";
        if($_SESSION["publicKey"] == '7pXE6si8UXotbaKk8YZw8jgZ1y4qEnLkwpL2hcLU7MXh'){
            setcookie("buyInfo", "ERROR: Please visit the Discord (https://discord.gg/6cbkN4Qg) and contact Support!", time() + (30));

            exit();
        }

        $userCredits = 0;
        $sql = "SELECT sum(value) as value FROM `transactions` join `users` on `users`.`id` = `transactions`.`userId` where publicKey = ?;";
        $stmt = mysqli_stmt_init($con);
        mysqli_stmt_prepare($stmt,$sql);
        mysqli_stmt_bind_param($stmt, "s", $_SESSION['publicKey']);
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
        $tokenId = stripslashes($_REQUEST['tokenId']);
        $tokenAmount = stripslashes($_REQUEST['tokenAmount']);
        if($tokenAmount > $userCredits){
            // User does not have enough credits
            echo "User does not have enough credits";
            exit();
        }
        echo "User has enough credits";
        // $tokenId = mysqli_real_escape_string($con, $tokenId);
        // $tokenPrice = 0;

        // $sql = "SELECT price, address FROM tokens left join tokenPayouts b on b.tokenId = tokens.id where tokens.id = ? and b.payoutToUserId is null";
        // $stmt = mysqli_stmt_init($con);
        // mysqli_stmt_prepare($stmt,$sql);
        // mysqli_stmt_bind_param($stmt, "s", $nftId);
        // mysqli_stmt_execute($stmt);
        // $result = mysqli_stmt_get_result($stmt);
        // while($row = mysqli_fetch_assoc($result)){
        //     $nftPrice = $row['price'];
        //     $nftAddress = $row['address'];
        //     if($row['price'] > $userCredits){
        //         // User does not have enough credits
        //         header("Location: ./");
        //         exit();
        //     }
        //     break;
        // }


        $create_datetime = date("Y-m-d H:i:s");
        $query    = "INSERT into `tokenPayouts` (tokenId, payoutToUserId) VALUES ((SELECT tokens.id FROM tokens left join tokenPayouts b on b.tokenId = tokens.id where tokens.id = '".$tokenId."' and b.payoutToUserId is null), (SELECT id from users where publicKey = '".$_SESSION["publicKey"]."') )";
        $result   = mysqli_query($con, $query);
        if ($result) {
            echo "Successfully bought";

                // Remove User Coins
                $query    = "INSERT INTO `transactions`(userId, value, information) VALUES((SELECT id from users where publicKey = '" . $_SESSION["publicKey"] . "'), -".$tokenAmount.", CONCAT('tokenpayouts #', +(SELECT `tokenpayouts`.`id` FROM `tokenpayouts` join `users` on `users`.`id` = `tokenpayouts`.`payoutToUserId` where publicKey = '" . $_SESSION["publicKey"] . "' ORDER BY `tokenpayouts`.`id` DESC LIMIT 1)))";
                $result   = mysqli_query($con, $query);
                if ($result) {
                    echo "Success";
                    setcookie("buyNFTId", $nftId, time() + (60));
                    setcookie("buyInfo", "Success", time() + (60));
                }
        } else {
            echo "Error Buying";
        }

    }

    exit();
?>