<?php
    require('../db.php');
    if (isset($_SESSION["publicKey"]) ) {
        $message = stripslashes($_GET['message']);
        $message = mysqli_real_escape_string($con, $message);

        if(isset($_GET['room'])){
            $room = stripslashes($_GET['room']);
            $room = mysqli_real_escape_string($con, $room);
        } else{
            $room = "";
        }

        $roomInfo = explode("*__*", $room);
        if($roomInfo[0] == "userToUser"){

            $publicKey= stripslashes($_SESSION['publicKey']);
            $publicKey= mysqli_real_escape_string($con, $publicKey);

            $username = "";

            $sql = "SELECT username FROM `users` WHERE publicKey=?";
            $stmt = mysqli_stmt_init($con);
            mysqli_stmt_prepare($stmt,$sql);
            mysqli_stmt_bind_param($stmt, "s", $publicKey);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            while($row = mysqli_fetch_assoc($result)){
                $username = $row['username'];
                break;
            }

            if($username != $roomInfo[0] && $username != $roomInfo[1]){
                // User is trying to send private messages in the name of someone else
                echo "Not your messages!";
                exit();
            }

        }


        $sql    = "INSERT INTO chatmessages (userId, message, room) VALUES((SELECT id from users where publicKey = '" . $_SESSION["publicKey"] . "'), ?, ?)";
        $stmt = mysqli_stmt_init($con);
        mysqli_stmt_prepare($stmt,$sql);
        mysqli_stmt_bind_param($stmt, "ss", $message, $room);
        if(mysqli_stmt_execute($stmt)) {
            echo "data: " . "Success", "\n\n";
        }

    } else {
        echo "Not logged in!";
    }

?>