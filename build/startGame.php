<?php
    require('./db.php');

    if (isset($_REQUEST["apiKey"]) ) {

        if($_REQUEST["apiKey"] == "EkVqPHQhSU76YDMdGHnxSpp5TNd7Rb96n7any2PjBCXpR9QprCH3iWcUJizQvUrabgn7GKfbYg9BxgtQKQaJjxWX5h6u4PLHL9yAf4wNLHLRLc9MRCfb5q3aetWBAXPjPcpPPp6pL5AqZ7BTWdngvhjK5b3Xx8Qthxk33QRdYBC3S8k4J9vEaYmvBmfuwQ7BJRv2KbB7cVy9zPYB2gFit99wx5qMXCfmyBd7bvntE7VftYhJHNx24TiDLKQ5CQvG"){
            // Only a admin with a valid api Key can start a new Game


            // 1. Pay out bets of Game
            $sql = "SELECT * FROM `crashgamebets` join `crashgame` on crashgamebets.gameId = crashgame.id where crashgame.endDatetime is null and crashgamebets.multiplier <= crashgame.result";
            $stmt = mysqli_stmt_init($con);
            mysqli_stmt_prepare($stmt,$sql);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            while($row = mysqli_fetch_assoc($result)){
                $payout = $row['amount'] * $row['multiplier'];

                // Add User Coins
                $sql    = "INSERT INTO `transactions`(userId, value, information) VALUES(?, ?, CONCAT('Crashgame #', (SELECT id from crashgame ORDER BY createDatetime DESC LIMIT 1) ) )";
                $stmt = mysqli_stmt_init($con);
                mysqli_stmt_prepare($stmt,$sql);
                mysqli_stmt_bind_param($stmt, "ss", $row['userId'], $payout);
                if(mysqli_stmt_execute($stmt)) {
                    echo "Updated User Credits<br>";
                }

            }

            // 2. End Game
            $sql    = "UPDATE crashgame SET endDatetime = CURRENT_TIMESTAMP WHERE endDatetime is null ORDER BY createDatetime DESC LIMIT 1";
            $stmt = mysqli_stmt_init($con);
            mysqli_stmt_prepare($stmt,$sql);
            if(mysqli_stmt_execute($stmt)) {
                echo "Ended Game<br>";
            }

            // 3. Start New Game
            $apiUrl = 'https://api.random.org/json-rpc/4/invoke';
            $message = '{"jsonrpc":"2.0","method":"generateDecimalFractions", "params": {"apiKey": "a6b5950a-1817-4055-9dd8-6efe4add5d8e","n": 1,"decimalPlaces": 3}, "id":1}';
            $requestHeaders = [
                'Content-Type: application/json',
                'Accept: application/json'
            ];
    
            $ch = curl_init($apiUrl);
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $message);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $requestHeaders);
            
            $response = curl_exec($ch);
            curl_close($ch);
            var_dump($response);
            
            $randomNumber = (json_decode($response)->{'result'}->{'random'}->{'data'}[0] + (rand(10,100)/100)) * 5;

            if($randomNumber < 1){
                // Min Payout is 1
                $randomNumber = 1;
            }

            $randomNumber = number_format((float)$randomNumber, 2, '.', ''); // Round to 2 decimal places

            $sql    = "INSERT INTO crashgame (result) VALUES(?)";
            $stmt = mysqli_stmt_init($con);
            mysqli_stmt_prepare($stmt,$sql);
            mysqli_stmt_bind_param($stmt, "s", $randomNumber);
            if(mysqli_stmt_execute($stmt)) {
                echo "Successfully created new Crash Game<br>";
            }

        }
    }

?>