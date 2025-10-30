<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela cadastro</title>
    <link rel="stylesheet" href="../estilos/styleCadastrar.css">
</head>
<body>
    
    <header>
        <nav>
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="#">Cadastrar Usuario</a></li>
                <li><a href="VerificarUsuario.php">procurar Usuário</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <form action="Cadastro.php" method="POST">
            <h2>Cadastro de Aluno</h2>

            <label for="nome">Nome: </label>
            <input type="text" name="nome" id="nome"> 

            <label for="sobrnome">Sobrenome: </label>
            <input type="text" name="sobrenome" id="sobrenome"> 

            <label for="email">E-mail: </label>
            <input type="text" name="email" id="email">
            
            <label for="curso">Selecione o curso: </label>
            <select name="curso" id="curso">
                <option value="ads">Analise e desenvolvimento de sistemas</option>
                <option value="es">Engenharia de Swoftare</option>
            </select>
        </form>
    </main>


    <?php 
    if($_SERVER["REQUEST_METHOD"] =="POST" ){
        include("../conexao/conexao.php");
    
        $nome = $_POST["nome"];
        $sobrenome = $_POST["sobrenome"];
        $email = $_POST["email"];
        $curso = $_POST["curso"];

        $hoje = new DateTime();
        $id = $hoje->format(Ym) . rand(100,999) ;

        $sql = "INSERT INTO usuarios (id,nome,sobrenome,email,curso) values (?,?,?,?,?)";
        $start = $conn-> prepare($sql);

        $stmt->bind_param("issss, $id,$nome,$sobrenome,$email,$curso");
        $stmt->execute();

        echo "<div class='mensagem sucesso'>usuario cadastrado com sucesso </div>";

        $stmt->close();
        $conn->close();
    }
    
    
    ?>

</body>
</html>