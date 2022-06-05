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

        $sql    = "INSERT INTO chatmessages (userId, message, room) VALUES((SELECT id from users where publicKey = '" . $_SESSION["publicKey"] . "'), ?, ?)";
        $stmt = mysqli_stmt_init($con);
        mysqli_stmt_prepare($stmt,$sql);
        mysqli_stmt_bind_param($stmt, "ss", $message, $room);
        if(mysqli_stmt_execute($stmt)) {
            echo "data: " . "Success", "\n\n";
        }

    } else {
        echo "data: " . "Not logged in!", "\n\n";
    }

?>