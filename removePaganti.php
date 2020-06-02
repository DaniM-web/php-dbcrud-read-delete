<?php

    $server = 'localhost';
    $username = 'root';
    $password = 'root';
    $dbName = 'hotel';

    $conn = new mysqli($server, $username, $password, $dbName);
    if ($conn -> connect_errno) {
        echo $conn -> connect_errno;
        return;
    }

    $id = $_POST['id'];

    $sql = "
    DELETE
    FROM paganti where id =" . $id;


    $conn -> query($sql);
    $conn -> close();
