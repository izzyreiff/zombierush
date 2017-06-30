var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
window.onload = function() {
    var titleEl = document.querySelector('.title-screen');
    var endEl = document.querySelector('.end-screen');
    var enemies = document.querySelectorAll('[id^="z"]');
    var deadEnemies = [];
    var scoreEl = document.querySelector('.score');
    var score = 0;
    var increaseCounter = function(e) {
        var enemy = e.currentTarget;
        if (deadEnemies.indexOf(enemy) != -1) {
            return; 
        }
        deadEnemies.push(enemy);
        score+=100;
        scoreEl.innerHTML = 'Score: ' + score;
        if (enemies.length === deadEnemies.length) {
            endEl.style.display = 'block';
        }
    }
    document.getElementById('startDaGame').addEventListener('click', function(){
        document.getElementById('startDaGame').setAttribute('style', 'display: none; visibility: hidden;')
    })
    enemies = Array.prototype.slice.call(enemies);
    enemies.forEach(function(enemyEl) {
        enemyEl.addEventListener('click', increaseCounter);
    });
};