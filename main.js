function addUser(){
    player1_name=document.getElementById("player1_name_input").value ;
    player2_name=document.getElementById("player2_name_input").value ;
    
    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name", player2_name);
    
    window.location="game_page.html";
    }
    
    <!DOCTYPE html>
    <html>
    <head>
        <title>Guess The Word</title>
    
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    
    <link rel="stylesheet" type="text/css" href="game.css">
    
    <script src="game_login.js"></script>
    </head>
    <body>
    <center>
        <h1>
            game
        </h1>
        <div class="col-lg-4 col-sm-8 col-xs-11 login_div1">
            <h3>player 1 login for the game</h3>
            <label>user name- </label>
            <input type="text" id="player1_name_input" class="form-control" placeholder="player1name">
            <br>
        </div>
        <br>
    
        <div class="col-lg-4 col-sm-8 col-xs-11 login_div2">
            <h3>player 2 login for the game</h3>
            <label>user name- </label>
            <input type="text" id="player2_name_input" class="form-control" placeholder="player2name">
            <br>
        </div>
        <br>
        <button style="width:30%" class="btn btn-primary" onclick="addUser()">login</button>
    </center>
    </body>
    </html>    