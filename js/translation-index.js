
const translations = {
    'ua': {
        /* --- НАВІГАЦІЯ --- */
        'nav-home': 'Головна',
        'nav-about': 'Про нас',
        'nav-services': 'Послуги',
        'nav-furniture': 'Меблі&nbsp;', // Кнопка випадаючого меню
        'nav-sofa': 'Дивани',
        'nav-bed': 'Ліжка',
        'nav-chair': 'Крісла',
        'nav-wardrobe': 'Шафи',
        'nav-bookshelf': 'Полиці',
        'nav-ottoman': 'Пуфи',
        'nav-dresser': 'Комоди',
        'nav-nightstand': 'Тумбочки',
        
        /* --- HERO SECTION (Головний банер) --- */
        'hero-title': 'Зробіть свій інтер\'єр<br>мінімалістичним та сучасним',
        'hero-desc': 'Перетворіть свою кімнату на більш мінімалістичну та сучасну легко та швидко',
        'btn-shop': 'Купити зараз',

        /* --- WHY CHOOSING US (Чому ми) --- */
        'features-title': 'Чому обирають нас',
        'feat-1-title': 'Розкішні умови',
        'feat-1-desc': 'Перевага найму робочого простору у нас — це розкішні умови.',
        'feat-2-title': 'Доступна ціна',
        'feat-2-desc': 'Ви можете отримати робочий простір за доступною ціною.',
        'feat-3-title': 'Великий вибір',
        'feat-3-desc': 'Ми надаємо багато унікальних варіантів робочого простору.',

        /* --- BEST SELLING (Найкращі товари) --- */
        'bestsell-title': 'Хіти продажу',
        'tab-chair': 'Крісла',
        'tab-beds': 'Ліжка',
        'tab-sofa': 'Дивани',
        'tab-lamp': 'Лампи',
        'link-view-all': 'Дивитись все',
        
        /* --- EXPERIENCE / PROCESS (Досвід) --- */
        'exp-subtitle': 'Досвід',
        'exp-title': 'Ми надаємо вам<br>найкращий досвід',
        'exp-desc': 'Ви не хвилюєтесь про результат, тому що ми вже маємо великий досвід у цій сфері.',

        /* --- MATERIALS --- */
        'proc-subtitle': 'МАТЕРІАЛИ',
        'proc-title': 'Дуже серйозний процес виготовлення меблів',
        'proc-desc': 'Оскільки наше особисте задоволення є основою дизайну...',

        /* --- TESTIMONIALS (Відгуки - клас .our) --- */
        'reviews-title': 'Відгуки клієнтів',

        /* --- FOOTER --- */
        
        'foot-desc': 'Furni - це магазин меблів, який пропонує якість та комфорт.',
        
    },
    'en': {
        /* --- NAVIGATION --- */
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-services': 'Services',
        'nav-furniture': 'Furniture',
        'nav-sofa': 'Sofa',
        'nav-bed': 'Bed',
        'nav-chair': 'Armchair',
        'nav-wardrobe': 'Wardrobe',
        'nav-bookshelf': 'Bookshelf',
        'nav-ottoman': 'Ottoman',
        'nav-dresser': 'Dresser',
        'nav-nightstand': 'Nightstand',

        /* --- HERO SECTION --- */
        'hero-title': 'Make Your Interior More<br>Minimalistic & Modern',
        'hero-desc': 'Turn your room into a lot more minimal and modern with ease and speed',
        'btn-shop': 'Shop Now',

        /* --- WHY CHOOSING US --- */
        'features-title': 'Why Choosing Us',
        'feat-1-title': 'Luxury Facilities',
        'feat-1-desc': 'The advantage of hiring a workspace with us is that givees you comfortable service.',
        'feat-2-title': 'Affordable Price',
        'feat-2-desc': 'You can get a workspace of the highst quality at an affordable price.',
        'feat-3-title': 'Many Choices',
        'feat-3-desc': 'We provide many unique work space choices so that you can choose clearly.',

        /* --- BEST SELLING --- */
        'bestsell-title': 'Best Selling Products',
        'tab-chair': 'Chair',
        'tab-beds': 'Beds',
        'tab-sofa': 'Sofa',
        'tab-lamp': 'Lamp',
        'link-view-all': 'View All',

        /* --- EXPERIENCE --- */
        'exp-subtitle': 'Experiences',
        'exp-title': 'We Provide You The<br>Best Experience',
        'exp-desc': 'You don’t have to worry about the result because all of these interiors are made by people who are professionals.',

        /* --- MATERIALS --- */
        'proc-subtitle': 'MATERIALS',
        'proc-title': 'A Very Serious<br>Furniture Making Process',
        'proc-desc': 'Since our personal pleasure is the basis of design...',

        /* --- TESTIMONIALS --- */
        'reviews-title': 'Our Client Reviews',

        /* --- FOOTER --- */
      
        'foot-desc': 'Furni is a furniture store that offers quality and comfort.',
        
    }
};

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    
    // Зміна активної кнопки мови
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });

    // Заміна текстів
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

// Запуск при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en'; 
    setLanguage(savedLang);
});