    var winners = [];
    var players = [];
    var snakeEyes = false;
    var highScore = 0;

    for(i=0;i<4;i++){
    players[i] = new Player(prompt("Enter name for player no."+(i+1)));
    }

    function Player(name){
    this.name = name;
    var score = 0;
    var n = 0;
    this.turn = function() {
        n+=1;
        console.log(players[i].name+" - Turn "+n);
    };
    this.addToScore = function (total) {
        score +=total;
    };
    this.getScore = function () {
        return score;
    };    
    }

      
    function rollSingleDice() {
     return Math.floor(Math.random()*6+1);
    }

    function rollDice(player) {

    var roll1 = rollSingleDice();
    var roll2 = rollSingleDice();
    player.addToScore(roll1 + roll2);
    player.turn();

    while (roll1 === roll2) {
    console.log ("  First Die: " + roll1 + ". Second Die: " + roll2 + ". Total Score: " + player.getScore() + ".");
    
    if (roll1 === 1) {
        console.log ("Snake Eyes!");
        
        for(i=0;i<players.length;i++){
            console.log(players[i].name+" scored "+players[i].getScore()+".");
            if(players[i].getScore() > highScore) {
                 highScore = players[i].getScore();
              }
         }
          
        for(i=0;i<players.length;i++){
            if(players[i].getScore()===highScore){
            var x=0; winners[x]=players[i].name; x++;
             }
          } 
          switch(winners.length) {
              case 1 :
                  console.log("Congratulations "+winners[0]+" you have won!");
                  break;
              case 2 :
                  console.log("Congratulations "+winners[0]+" and "+winners[1]+" you have won!");
                  break;
              case 3 :
                  console.log("Congratulations "+winners[0]+" and "+winners[1]+" and "+winners[2]+" you have won!");
                  break;
              case 4 :
                  console.log("Congratulations "+winners[0]+" and "+winners[1]+" and "+winners[2]+" and "+winners[3]+" you have won!");
                  break;        
          }
          return true;
        } 
        
    else {
    console.log("  Congratulations "+player.name+ ". You threw doubles!");
    roll1 = rollSingleDice ();
    roll2 = rollSingleDice ();
    player.addToScore(roll1+roll2);
    }
    
    }
    console.log ("  First Die: " + roll1 + ". Second Die: " + roll2 + ". Total Score: " + player.getScore() +".");
    return false;
    }

    while (snakeEyes === false) {
    
    for(i=0;i<players.length;i++){
        snakeEyes = rollDice(players[i]);
    }
    };
