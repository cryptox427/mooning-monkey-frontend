<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

    require('db.php');
    
$data = json_decode(file_get_contents("php://input"),true);
$parse_data = $data["data"];   

    if (isset($parse_data['password']) && isset($parse_data['publicKey'])) {
        // removes backslashes
        $username = stripslashes($parse_data['userName']);
        //escapes special characters in a string
        $username = mysqli_real_escape_string($con, $username);
        $publicKey= stripslashes($parse_data['publicKey']);
        $publicKey= mysqli_real_escape_string($con, $publicKey);
        $password = stripslashes($parse_data['password']);
        $password = mysqli_real_escape_string($con, $password);
        $refCode = stripslashes($parse_data['refCode']);
        $refCode = mysqli_real_escape_string($con, $refCode);
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
  
        if(!$alreadyExists) {
            // PUBLIC KEY UNUSED
            
            if(isset($parse_data['userName'])){
                $create_datetime = date("Y-m-d H:i:s");
                $query    = "INSERT into `users` (username, password, publicKey, createDatetime, refCode)
                            VALUES ('$username', '" . password_hash($password,PASSWORD_DEFAULT) . "', '$publicKey', '$create_datetime', '. $refCode .')";
                $result   = mysqli_query($con, $query);
                if ($result) {
                    $_SESSION['publicKey'] = $publicKey;
                    echo json_encode($_SESSION["publicKey"]);
                    echo "register success";
                } else {
                    echo "register failed";
                }
            }
  
        }else{
            //PUBLIC KEY ALREADY USED
            $publicKey= stripslashes($parse_data['publicKey']);
            $publicKey= mysqli_real_escape_string($con, $publicKey);
            $password = stripslashes($parse_data['password']);
            $password = mysqli_real_escape_string($con, $password);

            // Check user is exist in the database
            $query    = "SELECT * FROM `users` WHERE publicKey='$publicKey'";
            $result = mysqli_query($con, $query) or die(mysql_error());
            while($row = mysqli_fetch_assoc($result)){
                if(password_verify($password,$row['password'])){
                    //session_register($publicKey);
                    
                    $_SESSION['publicKey'] = $publicKey;
                    echo "login success";
                }else{
                    //PASSWORD IS NOT CORRECT
                    echo "login faild";
                }
            }
  
        }
    }
?>