// Массивы с различными котиками и лапками
const nyanCats = ['🐱', '😸', '😻', '🙀', '😿', '😾', '🐈', '🐈‍⬛', '🦁'];
const paws = ['🐾', '🐾', '🐾'];
const sparkleSymbols = ['✨', '⭐', '🌟', '💫', '⚡'];

// Создание нян-кетов
function createNyanCat() {
    const container = document.getElementById('nyanCatsContainer');
    if (!container) return;
    
    const nyanCat = document.createElement('div');
    nyanCat.className = 'nyan-cat';
    nyanCat.textContent = nyanCats[Math.floor(Math.random() * nyanCats.length)];
    nyanCat.style.top = Math.random() * 80 + 10 + 'vh';
    nyanCat.style.animationDelay = Math.random() * 2 + 's';
    nyanCat.style.animationDuration = (Math.random() * 4 + 6) + 's';
    
    // Обработчик клика
    nyanCat.addEventListener('click', function() {
        this.classList.add('clicked');
        // Звуковой эффект (если нужно)
        console.log('Нян-кет пойман! 🎉');
        setTimeout(() => {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        }, 500);
    });
    
    container.appendChild(nyanCat);
    
    // Удаление через 10 секунд
    setTimeout(() => {
        if (nyanCat.parentNode) {
            nyanCat.parentNode.removeChild(nyanCat);
        }
    }, 10000);
}

// Создание лапок с реальными изображениями
function createPaw() {
    const container = document.getElementById('pawsContainer');
    if (!container) return;
    
    const paw = document.createElement('div');
    paw.className = 'paw';
    
    // Создаем изображение лапки
    const pawImg = document.createElement('img');
    
    // Разные типы изображений котиков для лапок
    const pawTypes = [
        'https://cataas.com/cat/cute?width=150&height=150',
        'https://cataas.com/cat/orange?width=150&height=150', 
        'https://cataas.com/cat/white?width=150&height=150',
        'https://cataas.com/cat/tabby?width=150&height=150',
        'https://cataas.com/cat/black?width=150&height=150',
        'https://cataas.com/cat/gray?width=150&height=150',
        'https://cataas.com/cat/fluffy?width=150&height=150',
        'https://cataas.com/cat/small?width=150&height=150'
    ];
    
    // Резервные изображения
    const fallbackImages = [
        'https://placekitten.com/150/150',
        'https://placekitten.com/151/151',
        'https://placekitten.com/152/152',
        'https://placekitten.com/153/153',
        'https://placekitten.com/154/154',
        'https://placekitten.com/155/155',
        'https://placekitten.com/156/156',
        'https://placekitten.com/157/157'
    ];
    
    const randomIndex = Math.floor(Math.random() * pawTypes.length);
    const timestamp = Date.now() + Math.random(); // Уникальный параметр для обновления
    
    pawImg.src = pawTypes[randomIndex] + '&t=' + timestamp;
    pawImg.alt = 'Котик выглядывает';
    pawImg.onerror = function() {
        this.src = fallbackImages[randomIndex];
    };
    
    paw.appendChild(pawImg);
    
    // Случайное направление появления
    const sides = ['left', 'right', 'top', 'bottom'];
    const side = sides[Math.floor(Math.random() * sides.length)];
    paw.classList.add('paw-' + side);
    
    // Случайная позиция вдоль стороны
    if (side === 'left' || side === 'right') {
        paw.style.top = Math.random() * (window.innerHeight - 200) + 100 + 'px';
    } else {
        paw.style.left = Math.random() * (window.innerWidth - 200) + 100 + 'px';
    }
    
    paw.style.animationDelay = Math.random() * 3 + 's';
    paw.style.animationDuration = (Math.random() * 3 + 7) + 's';
    
    // Обработчик клика с звуковым эффектом
    paw.addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.add('clicked');
        
        // Добавляем эффект "мяуканья" 
        console.log('🐾 Мяу! Котик спрятал лапку!');
        
        // Создаем временный текстовый эффект
        const meowEffect = document.createElement('div');
        meowEffect.textContent = '🐾 МЯУ!';
        meowEffect.style.position = 'absolute';
        meowEffect.style.left = event.clientX - 30 + 'px';
        meowEffect.style.top = event.clientY - 30 + 'px';
        meowEffect.style.color = '#ff00ff';
        meowEffect.style.fontSize = '2rem';
        meowEffect.style.fontWeight = 'bold';
        meowEffect.style.textShadow = '0 0 10px rgba(255, 0, 255, 0.8)';
        meowEffect.style.zIndex = '10002';
        meowEffect.style.animation = 'fadeUpAndOut 1s ease-out forwards';
        meowEffect.style.pointerEvents = 'none';
        
        document.body.appendChild(meowEffect);
        
        setTimeout(() => {
            if (meowEffect.parentNode) {
                meowEffect.parentNode.removeChild(meowEffect);
            }
        }, 1000);
        
        setTimeout(() => {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        }, 800);
    });
    
    // Добавляем hover эффект с мяуканьем
    paw.addEventListener('mouseenter', function() {
        // Можно добавить тихий звук мяуканья здесь
        console.log('😸 Котик заметил вас!');
    });
    
    container.appendChild(paw);
    
    // Удаление через 12 секунд (увеличили время из-за более медленной анимации)
    setTimeout(() => {
        if (paw.parentNode) {
            paw.parentNode.removeChild(paw);
        }
    }, 12000);
}

// Создание радужных частиц
function createParticle() {
    const container = document.getElementById('rainbowParticles');
    if (!container) return;
    
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const colors = ['#ff0080', '#ff8000', '#ffff00', '#80ff00', '#00ff80', '#0080ff', '#8000ff'];
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDelay = Math.random() * 2 + 's';
    particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
    
    container.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 10000);
}

// Создание блесток
function createSparkle() {
    const container = document.getElementById('sparkles');
    if (!container) return;
    
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.textContent = sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.animationDelay = Math.random() * 2 + 's';
    
    const colors = ['#ff0080', '#ffff00', '#00ffff', '#ff00ff', '#ffffff'];
    sparkle.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    container.appendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 3000);
}

// Инициализация эффектов
function initNyanEffects() {
    // Запуск анимаций с обновленными интервалами
    setInterval(createNyanCat, 2500); // Немного реже нян-кеты
    setInterval(createPaw, 3000); // Реже лапки, чтобы они были более заметными
    setInterval(createParticle, 500);
    setInterval(createSparkle, 800);
    
    // Создаем начальные элементы
    setTimeout(() => {
        for (let i = 0; i < 2; i++) { // Меньше начальных нян-кетов
            setTimeout(createNyanCat, i * 1500);
        }
        for (let i = 0; i < 3; i++) { // Больше начальных лапок
            setTimeout(createPaw, i * 1000);
        }
        for (let i = 0; i < 10; i++) {
            setTimeout(createParticle, i * 200);
            setTimeout(createSparkle, i * 300);
        }
    }, 1000);
    
    // Обновление изображений котиков каждые 30 секунд
    if (window.location.pathname.includes('gallery.html')) {
        setInterval(refreshCatImages, 30000);
    }
}

// Функция для обновления изображений котиков
function refreshCatImages() {
    const catImages = document.querySelectorAll('.cat-image img');
    catImages.forEach((img, index) => {
        const timestamp = Date.now();
        const randomParam = Math.random();
        
        // Разные параметры для разнообразия
        const catTypes = ['cute', 'orange', 'white', 'small', 'tabby', 'gray', 'bengal', 'black', 'fluffy'];
        const catType = catTypes[index % catTypes.length];
        
        setTimeout(() => {
            img.src = `https://cataas.com/cat/${catType}?width=400&height=250&t=${timestamp}&r=${randomParam}`;
        }, index * 500); // Задержка для плавного обновления
    });
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', initNyanEffects);
