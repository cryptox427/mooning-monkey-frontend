<?php
header("Content-Type: application/json");
require('./db.php');

// Gets top 100 from leaderboard

$response = array();


$sql = "SELECT ";
$sql = $sql. "(select count(*) from users) as users, ";
$sql = $sql. "(select count(*) from transactions where information like '%crashgame%' and value < 0) as bets, ";
$sql = $sql. "(select ABS(sum(value)) from transactions where information like '%crashgame%' and value < 0) as wagered, ";
$sql = $sql. "(select (sum(value) * -1) from transactions where userId = crashgamebets.userId and information like '%crashgame%') as InvestorProfit, ";
$sql = $sql. "(select (select (sum(value) * -1) from transactions t2 where t2.id <= t1.id) as profitATL from transactions t1 ORDER BY profitATL ASC LIMIT 1) as InvestorProfitATH ";
$sql = $sql. "FROM `crashgamebets` ";
$sql = $sql. "LIMIT 1";
$stmt = mysqli_stmt_init($con);
mysqli_stmt_prepare($stmt,$sql);

mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
$response = array(
    'status' => true,
    'message' => 'Success',
    'data' => mysqli_fetch_all($result)
);

echo json_encode($response);


?>