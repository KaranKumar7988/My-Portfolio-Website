<?php



//connection

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mywebsite";


$conn = mysqli_connect($servername,$username,$password,$dbname);


if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    $Name = $_POST['Name'];
    $Email = $_POST['Email'];
    $Project = $_POST['Project'];
    $Message1 = $_POST['Message1'];
   

   
    $sql = "INSERT INTO mywebsite (Name, Email, Project, Message1) VALUES ('$Name', '$Email', '$Project','$Message1')";
   


$my= mysqli_query($conn,$sql);

if($my){

    header("location:index.html");

}

}


?>