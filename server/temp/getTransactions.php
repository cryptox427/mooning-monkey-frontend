<?php
header("Content-Type: application/json");
require('./db.php');

$information = $_GET['information'] ?? '';
$response = array();


if (isset($_SESSION["publicKey"])) {
    
    if($information != ''){
        $sql = "SELECT value, fee, information, status, transactions.createDatetime FROM `transactions` join `users` on `users`.`id` = `transactions`.`userId` where publicKey = ? and information = ?;";
        $stmt = mysqli_stmt_init($con);
        mysqli_stmt_prepare($stmt,$sql);
        mysqli_stmt_bind_param($stmt, "ss", $_SESSION['publicKey'], $information);
    }else{
        $sql = "SELECT value, fee, information, status, transactions.createDatetime FROM `transactions` join `users` on `users`.`id` = `transactions`.`userId` where publicKey = ?;";
        $stmt = mysqli_stmt_init($con);
        mysqli_stmt_prepare($stmt,$sql);
        mysqli_stmt_bind_param($stmt, "s", $_SESSION['publicKey']);
    }

    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    $transactionsFound = false;
    while($row = mysqli_fetch_assoc($result)){
        $response = array(
            'status' => true,
            'message' => 'Success',
            'data' => mysqli_fetch_all($result)
        );
    }

}else{
    $response = array(
        'status' => true,
        'message' => 'Not logged in'
    );
}

echo json_encode($response);


?>