<?php 
$servername = "localhost"; //ip oou dom do serve
$username = "root" ; // usuario
$password = ""; // senha usuario
$dbname = "teste": // banco


//conexao
$conn = new mysqli($servername,$username,$password,$dbname);

//ver. cenexao
 
if($conn ->connect_error){
    die("Conexão falhou! (v_v) ");
}


?>