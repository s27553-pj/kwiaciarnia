<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "florist";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Błąd połączenia z bazą danych: " . $conn->connect_error);
}else {
echo "polaxzono z baza";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $flowername = $_POST["flowernameinput"];
    $quantity = $_POST["quantity"];
    echo "flowername: " . $_POST["flowernameinput"] . "<br>";
echo "quantity: " . $_POST["quantity"] . "<br>";

if (isset($flowername) && isset($quantity)) {
       // echo 'cos';
        $sql = "INSERT INTO cart (flowername, quantity) VALUES ('$flowername', $quantity)";
        echo $sql;
        if ($conn->query($sql) === TRUE) {
            echo "Rekord został dodany do bazy danych.";
        } else {
            die("Błąd: " . $sql . "<br>" . $conn->error);
        }
        
    }
}
}

$conn->close();
?>