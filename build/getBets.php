<?php
header("Content-Type: application/json");
$response = array();

require('./db.php');

$userBalance = 0;
$sql = "SELECT username, amount, multiplier FROM `crashgamebets` join users on crashgamebets.userId = users.id where gameId = (SELECT id from crashgame ORDER BY createDatetime DESC LIMIT 1) LIMIT 25;";
$stmt = mysqli_stmt_init($con);
mysqli_stmt_prepare($stmt,$sql);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
while($row = mysqli_fetch_assoc($result)){
    $response = array(
        'status' => true,
        'message' => 'Success',
        'data' => mysqli_fetch_all($result)
    );
}
echo json_encode($response);


?>