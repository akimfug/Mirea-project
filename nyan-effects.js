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

// Создание лапок
function createPaw() {
    const container = document.getElementById('pawsContainer');
    if (!container) return;
    
    const paw = document.createElement('div');
    paw.className = 'paw';
    paw.textContent = paws[Math.floor(Math.random() * paws.length)];
    
    // Случайное направление появления
    const sides = ['left', 'right', 'top', 'bottom'];
    const side = sides[Math.floor(Math.random() * sides.length)];
    paw.classList.add('paw-' + side);
    
    // Случайная позиция вдоль стороны
    if (side === 'left' || side === 'right') {
        paw.style.top = Math.random() * 80 + 10 + 'vh';
    } else {
        paw.style.left = Math.random() * 80 + 10 + 'vw';
    }
    
    paw.style.animationDelay = Math.random() * 3 + 's';
    
    // Обработчик клика
    paw.addEventListener('click', function() {
        this.classList.add('clicked');
        console.log('Лапка поймана! 🐾');
        setTimeout(() => {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        }, 400);
    });
    
    container.appendChild(paw);
    
    // Удаление через 8 секунд
    setTimeout(() => {
        if (paw.parentNode) {
            paw.parentNode.removeChild(paw);
        }
    }, 8000);
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
    // Запуск анимаций
    setInterval(createNyanCat, 2000);
    setInterval(createPaw, 1500);
    setInterval(createParticle, 500);
    setInterval(createSparkle, 800);
    
    // Создаем начальные элементы
    setTimeout(() => {
        for (let i = 0; i < 3; i++) {
            setTimeout(createNyanCat, i * 1000);
            setTimeout(createPaw, i * 800);
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
