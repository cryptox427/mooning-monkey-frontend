<?php
    require('./db.php');

    if (isset($_SESSION['publicKey'])) {

        $publicKey= stripslashes($_SESSION['publicKey']);
        $publicKey= mysqli_real_escape_string($con, $publicKey);

        $exists = false;

        $sql = "SELECT username FROM `users` WHERE publicKey=?";
        $stmt = mysqli_stmt_init($con);
        mysqli_stmt_prepare($stmt,$sql);
        mysqli_stmt_bind_param($stmt, "s", $publicKey);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        while($row = mysqli_fetch_assoc($result)){
            echo $row['username'];
            $exists = true;
            break;
        }
  
        if(!$exists) {
            echo "Doesnt Exist";
        }
    } else{
        echo "Not logged in";
    }

?>