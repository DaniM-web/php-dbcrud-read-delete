<?php

header('Content-Type: application/json');
$res = [];

    $server = 'localhost';
    $username = 'root';
    $password = 'root';
    $dbName = 'hotel';

    $conn = new mysqli($server, $username, $password, $dbName);
    if ($conn -> connect_errno) {
        echo $conn -> connect_errno;
        return;
    }
    $sql = "
    SELECT id, name, lastname, address
    FROM paganti
    ";
    $results = $conn -> query($sql);

    if ($results -> num_rows > 0) {

        while ($row = $results -> fetch_assoc()) {

            $res[] = $row;
        }
        echo json_encode($res);

      }else {
        echo json_encode('0 results');
      }


    $conn -> close();
