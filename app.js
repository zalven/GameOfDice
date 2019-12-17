
var scores = [0,0]
var roundScore = 0;
var activePlayer = Math.floor(Math.random()*2);
var gamePlaying = true;
gameReset();


function gameReset(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = Math.floor(Math.random()*2);
    var gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-1').textContent = 'PLAYER 2';
    document.querySelector('#name-0').textContent = 'PLAYER 1';
    document.querySelector('.player-0-panel').classList.remove('active') 
    document.querySelector('.player-1-panel').classList.remove('active') 
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('winner')
}
document.querySelector('.btn-new').addEventListener('click',function(){
    gameReset();
})
document.querySelector('.btn-roll').addEventListener('click',function(){

         if(gamePlaying){
            gameWin();
            var dice = Math.floor(Math.random()*6+1);
            var diceDom = document.querySelector('.dice');
            diceDom.style.display = 'block';
            diceDom.src = 'dice-'+dice+'.png'
         
            if(dice >1){
                roundScore += dice;
                document.getElementById('current-'+activePlayer).textContent  = roundScore;
            }else{
                nextPlayer();
            }
         }

})

document.querySelector('.btn-hold').addEventListener('click',function(){
    
   if(gamePlaying){
        //yu wierd sht
        scores[activePlayer] += roundScore;
        //ima wierd sht
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
        //wierd function and some sht
        gameWin();
        nextPlayer();
    }  
})
function nextPlayer(){
    activePlayer ===0? activePlayer = 1 :activePlayer=0;
    roundScore = -1;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');;
    document.querySelector('.dice').style.display = 'none';
}
function gameWin(){
   if(scores[activePlayer]>=100){
    document.querySelector('.dice').style.display = 'none';
        gamePlaying = false   
        document.querySelector('#name-'+activePlayer).textContent = 'WINNER'
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner')
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active') 
    }
}
