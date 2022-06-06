<?php
//date_default_timezone_set("America/New_York");
header("Cache-Control: no-store");
header("Content-Type: text/event-stream");
require('../db.php');

session_write_close(); // Allow multiple requests from same user

if(isset($_GET['room'])){
    $room = stripslashes($_GET['room']);
    $room = mysqli_real_escape_string($con, $room);
} else{
    $room = "";
}

// Get the latest 25 Messages but show the oldest on top and newest on bottom
$roomInfo = explode("*__*", $room);
if($roomInfo[0] == "userToUser"){

    if (isset($_SESSION['publicKey'])) {

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
            // User is trying to get private messages from someone else
            echo "Not your messages!";
            exit();
        }

        $roomInfo[1] = '%' . $roomInfo[1] . '%';
        $roomInfo[2] = '%' . $roomInfo[2] . '%';
    
        $sql = "SELECT * FROM (SELECT chatmessages.id, chatmessages.createDatetime, users.username, chatmessages.message FROM `chatmessages` join users on chatmessages.userId = users.id WHERE room like ? and room like ? ORDER BY createDatetime DESC LIMIT 25) t ORDER BY createDatetime ASC;";
        $stmt = mysqli_stmt_init($con);
        mysqli_stmt_prepare($stmt,$sql);
        mysqli_stmt_bind_param($stmt, "ss", $roomInfo[1], $roomInfo[2]);
    } else {
        echo "Not logged in";
        exit();
    }

}else{
    $sql = "SELECT * FROM (SELECT chatmessages.id, chatmessages.createDatetime, users.username, chatmessages.message FROM `chatmessages` join users on chatmessages.userId = users.id WHERE room = ? ORDER BY createDatetime DESC LIMIT 25) t ORDER BY createDatetime ASC;";
    $stmt = mysqli_stmt_init($con);
    mysqli_stmt_prepare($stmt,$sql);
    mysqli_stmt_bind_param($stmt, "s", $room);
}

mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
while($row = mysqli_fetch_assoc($result)){
    // Output all Messages line by line
    echo $row['createDatetime'] . " | " . $row['username'] . " | " . $row['message'], "<///***br***///>";
}

?>