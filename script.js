window.onload = function() {
    var titleEl = document.querySelector('.title-screen');
    var endElWin = document.querySelector('.end-screen-win');
    var endElLose = document.querySelector('.end-screen-lose');
    var enemies = document.querySelectorAll('[id^="z"]');
    var deadEnemies = [];
    var scoreEl = document.querySelector('.score');
    var timerEl = document.querySelector('.timer');
    var score = 0;
    var timer = 0;
    
    var increaseCounter = function(e) {
        var enemy = e.currentTarget;
        if (deadEnemies.indexOf(enemy) != -1) {
            return; 
        }
        deadEnemies.push(enemy);
        score += 100;
        scoreEl.innerHTML = 'Score: ' + score;
        if (score == 1200) {
            endElWin.style.display = 'block';
        }
        if (timer>=35){
            endElWin.style.display = 'none'
        }
    }

    window.setInterval(
        function () {
            timer = timer + 1;
            var timeLeft = 35 - timer;
            timerEl.innerHTML = 'Time Left: '+ timeLeft;
            if (score < 1200 && timer > 35) {
                endElLose.style.display = 'block';
                endElWin.style.display = 'none'
            }
        }, 1000);
    
    document.getElementById('startGame').addEventListener('click', function(){
        document.getElementById('startGame').setAttribute('style', 'display: none; visibility: hidden;')
    })
    enemies = Array.prototype.slice.call(enemies);
    enemies.forEach(function(enemyEl) {
        enemyEl.addEventListener('click', increaseCounter);
    });
};