<?php
    require('./db.php');

    // When form submitted, insert values into the database.
    if (isset($_REQUEST['publicKey'])) {

        $publicKey= stripslashes($_REQUEST['publicKey']);
        $publicKey= mysqli_real_escape_string($con, $publicKey);

        $alreadyExists = false;

        $sql = "SELECT * FROM `users` WHERE publicKey=?";
        $stmt = mysqli_stmt_init($con);
        mysqli_stmt_prepare($stmt,$sql);
        mysqli_stmt_bind_param($stmt, "s", $publicKey);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        while($row = mysqli_fetch_assoc($result)){
            $alreadyExists = true;
            break;
        }
  
        if($alreadyExists) {
            echo "Exists";
        } else {
            echo "Doesnt Exist";
        }
    }

?>