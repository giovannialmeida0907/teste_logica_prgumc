<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Imtrodução PHP</title>
</head>
<body>
    <h1> 
        <?php 
            echo "Hello Word";
        ?> 
    </h1>
    
        <h2>variaveis em PHP</h2>

    <p>
        <?php 
            $nome = "Piquirito";
            $sobrenome = "Periquito";
            
            echo "nome: $nome <br> Sobrenome: $sobrenome";
        ?>
    </p>

    <h2>Constantes em php</h2>
    <p>
        <?php 
            const faculdade = "UMC";
            const cidade = "Mogi das Cruzes";

            echo "Faculdade: " . faculdade ."<br>";
            echo "Cidade: " . cidade ."<br>";
        ?>
    </p>

</body>
</html>