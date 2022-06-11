<?php
    require('./db.php');
    if (isset($_SESSION["publicKey"]) ) {
        $amount = stripslashes($_GET['amount']);
        $amount = mysqli_real_escape_string($con, $amount);

        if($amount < 0.1){
            // Withdraw amount smaller then 0.1 is not allowed
            exit();
        }

        $userBalance = 0;
        $sql = "SELECT sum(value) as currentBalance FROM `transactions` join `users` on `users`.`id` = `transactions`.`userId` where publicKey = ?;";
        $stmt = mysqli_stmt_init($con);
        mysqli_stmt_prepare($stmt,$sql);
        mysqli_stmt_bind_param($stmt, "s", $_SESSION['publicKey']);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        while($row = mysqli_fetch_assoc($result)){
            if($row['currentBalance'] == ""){
                $userBalance = 0;
            }else{
                $userBalance = $row['currentBalance'];
            }
            break;
        }

        if($userBalance < floatval($amount)) {
            echo "NOT ENOUGH CREDITS!";
        } else {
                // Remove User Coins
                $sql    = "INSERT INTO `transactions`(userId, value, information) VALUES((SELECT id from users where publicKey = ?), -?, 'WITHDRAW')";
                $stmt = mysqli_stmt_init($con);
                mysqli_stmt_prepare($stmt,$sql);
                mysqli_stmt_bind_param($stmt, "ss", $_SESSION["publicKey"], ($amount ) );
                if(mysqli_stmt_execute($stmt)) {
                    echo "Success";
                }
        }

    }else{
        echo "Not logged in!";
    }

?>