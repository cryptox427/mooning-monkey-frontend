<?php
//date_default_timezone_set("America/New_York");
header("Cache-Control: no-store");
header("Content-Type: text/event-stream");
require('../db.php');

session_write_close(); // Allow multiple requests from same user

$lastMessageId = -1;
return;
while (true) {
    // Get the latest 25 Messages but show the oldest on top and newest on bottom
    $sql = "SELECT * FROM (SELECT chatmessages.id, chatmessages.createDatetime, users.username, chatmessages.message FROM `chatmessages` join users on chatmessages.userId = users.id WHERE chatmessages.id > " . $lastMessageId . " ORDER BY createDatetime DESC LIMIT 25) t ORDER BY createDatetime ASC;";
    $stmt = mysqli_stmt_init($con);
    mysqli_stmt_prepare($stmt,$sql);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    while($row = mysqli_fetch_assoc($result)){
        // Output all Messages line by line
        echo "data: " . $row['createDatetime'] . " | " . $row['username'] . " | " . $row['message'], "\n\n";
        $lastMessageId = $row['id']; // Save the last shown message Id => This way messages will not get shown double
    }

    //echo "data: now | testname | Hi", "\n\n";
    
    if (ob_get_contents()) ob_end_flush();
    flush();


    // Break the loop if the client aborted the connection (closed the page)
    if ( connection_aborted() ) break;

    sleep(1); // Update all messages every 1 Second

}

?>