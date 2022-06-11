<?php

    require('./db.php');
    
    
    $sql = "SELECT count(DISTINCT(userId)) as `online` FROM `lastlogin` WHERE createDatetime > NOW() - INTERVAL 30 MINUTE GROUP BY userId;";
    $stmt = mysqli_stmt_init($con);
    mysqli_stmt_prepare($stmt,$sql);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    while($row = mysqli_fetch_assoc($result)){
        echo $row['online'];
        break;
    }

?>