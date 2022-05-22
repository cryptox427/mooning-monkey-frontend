<?php
    require('../db.php');
    if (isset($_SESSION["publicKey"]) ) {
        $message = stripslashes($_GET['message']);
        $message = mysqli_real_escape_string($con, $message);

        $sql    = "INSERT INTO chatmessages (userId, message) VALUES((SELECT id from users where publicKey = '" . $_SESSION["publicKey"] . "'), ?)";
        $stmt = mysqli_stmt_init($con);
        mysqli_stmt_prepare($stmt,$sql);
        mysqli_stmt_bind_param($stmt, "s", $message);
        if(mysqli_stmt_execute($stmt)) {
            echo "Success";
        }

    }

?>