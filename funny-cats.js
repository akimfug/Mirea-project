// Функции для страницы смешных котов

// Поделиться мемом
function shareMeme(button) {
    const memeCard = button.closest('.meme-card');
    const memeTitle = memeCard.querySelector('h3').textContent;
    
    // Создаем эффект "поделился"
    const originalText = button.innerHTML;
    button.innerHTML = '✅ Поделился!';
    button.style.background = 'linear-gradient(45deg, #6bcf7f, #4d79ff)';
    
    // Показываем уведомление
    showNotification(`Мем "${memeTitle}" отправлен друзьям! 📤`);
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
    }, 2000);
}

// Генерация мема
function generateMeme() {
    const text = document.getElementById('memeText').value || 'Your Meme';
    const color = document.getElementById('textColor').value;
    const timestamp = Date.now();
    
    const memeImg = document.getElementById('generatedMemeImg');
    const encodedText = encodeURIComponent(text);
    
    memeImg.src = `https://cataas.com/cat/says/${encodedText}?width=400&height=300&fontSize=30&fontColor=${color}&t=${timestamp}`;
    
    showNotification('Мем создан! 🎭');
}

// Скачать мем
function downloadMeme() {
    const memeImg = document.getElementById('generatedMemeImg');
    const link = document.createElement('a');
    link.href = memeImg.src;
    link.download = 'my-cat-meme.jpg';
    link.click();
    
    showNotification('Мем сохранен! 💾');
}

// Переворот карточки с фактом
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Уведомления
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(45deg, #ff00ff, #00ffff);
        color: white;
        padding: 1rem 2rem;
        border-radius: 25px;
        font-weight: bold;
        z-index: 10000;
        animation: slideInNotification 0.3s ease;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutNotification 0.3s ease forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Игра "Поймай котика"
let gameActive = false;
let gameScore = 0;
let gameTimer = 30;
let gameInterval;
let timerInterval;

function startGame() {
    if (gameActive) return;
    
    gameActive = true;
    gameScore = 0;
    gameTimer = 30;
    
    document.getElementById('score').textContent = gameScore;
    document.getElementById('timer').textContent = gameTimer;
    
    const gameArea = document.getElementById('gameArea');
    gameArea.innerHTML = '<div class="game-active">Ловим котиков! 🐱</div>';
    
    // Таймер игры
    timerInterval = setInterval(() => {
        gameTimer--;
        document.getElementById('timer').textContent = gameTimer;
        
        if (gameTimer <= 0) {
            endGame();
        }
    }, 1000);
    
    // Создание котиков для ловли
    gameInterval = setInterval(createGameCat, 800);
    
    showNotification('Игра началась! Лови котиков! 🎮');
}

function createGameCat() {
    if (!gameActive) return;
    
    const gameArea = document.getElementById('gameArea');
    const cat = document.createElement('div');
    cat.className = 'game-cat';
    cat.innerHTML = ['🐱', '😸', '😻', '🙀', '😿', '😾'][Math.floor(Math.random() * 6)];
    
    // Случайная позиция
    const maxX = gameArea.offsetWidth - 60;
    const maxY = gameArea.offsetHeight - 60;
    cat.style.left = Math.random() * maxX + 'px';
    cat.style.top = Math.random() * maxY + 'px';
    
    cat.addEventListener('click', function() {
        if (!gameActive) return;
        
        gameScore += 10;
        document.getElementById('score').textContent = gameScore;
        
        // Эффект поимки
        this.style.animation = 'catchCat 0.3s ease forwards';
        setTimeout(() => {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        }, 300);
        
        // Случайный эффект
        const effects = ['💖', '⭐', '🎉', '✨', '🌟'];
        const effect = document.createElement('div');
        effect.textContent = effects[Math.floor(Math.random() * effects.length)];
        effect.className = 'catch-effect';
        effect.style.left = this.style.left;
        effect.style.top = this.style.top;
        gameArea.appendChild(effect);
        
        setTimeout(() => {
            if (effect.parentNode) {
                effect.parentNode.removeChild(effect);
            }
        }, 1000);
    });
    
    gameArea.appendChild(cat);
    
    // Удаляем котика через 3 секунды, если не поймали
    setTimeout(() => {
        if (cat.parentNode) {
            cat.parentNode.removeChild(cat);
        }
    }, 3000);
}

function endGame() {
    gameActive = false;
    clearInterval(gameInterval);
    clearInterval(timerInterval);
    
    const gameArea = document.getElementById('gameArea');
    let message = '';
    
    if (gameScore >= 200) {
        message = `🏆 Невероятно! Счет: ${gameScore}`;
    } else if (gameScore >= 100) {
        message = `🥇 Отлично! Счет: ${gameScore}`;
    } else if (gameScore >= 50) {
        message = `🥈 Хорошо! Счет: ${gameScore}`;
    } else {
        message = `🥉 Неплохо! Счет: ${gameScore}`;
    }
    
    gameArea.innerHTML = `
        <div class="game-over">
            <h3>Игра окончена!</h3>
            <p>${message}</p>
            <button class="btn btn-large" onclick="startGame()">Играть снова! 🔄</button>
        </div>
    `;
    
    showNotification(`Игра окончена! Счет: ${gameScore} 🎮`);
}

// Случайные смешные звуки котиков (визуальные)
function playMeowSound(element) {
    const meows = ['МЯУ!', 'МУРР!', 'ПУРР!', 'МЯВ!', 'МРРР!'];
    const meow = meows[Math.floor(Math.random() * meows.length)];
    
    const soundEffect = document.createElement('div');
    soundEffect.textContent = meow;
    soundEffect.className = 'meow-effect';
    soundEffect.style.cssText = `
        position: absolute;
        color: #ff00ff;
        font-size: 1.5rem;
        font-weight: bold;
        text-shadow: 0 0 10px rgba(255, 0, 255, 0.8);
        animation: meowFloat 1s ease-out forwards;
        pointer-events: none;
        z-index: 1000;
    `;
    
    element.appendChild(soundEffect);
    
    setTimeout(() => {
        if (soundEffect.parentNode) {
            soundEffect.parentNode.removeChild(soundEffect);
        }
    }, 1000);
}

// Добавляем стили для анимаций через JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInNotification {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutNotification {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes catchCat {
        0% { transform: scale(1); }
        50% { transform: scale(1.3) rotate(180deg); }
        100% { transform: scale(0) rotate(360deg); opacity: 0; }
    }
    
    @keyframes meowFloat {
        0% { transform: translateY(0) scale(1); opacity: 1; }
        100% { transform: translateY(-30px) scale(1.2); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем звуковые эффекты на мемы
    const memeCards = document.querySelectorAll('.meme-card');
    memeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            playMeowSound(this);
        });
    });
});
