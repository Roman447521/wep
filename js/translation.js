/* ====== 3. ЛОГІКА ДЛЯ ПЕРЕКЛАДУ СТОРІНКИ ====== */
const translations = {
    'ua': {
        // Навігація
        'nav-home': 'Головна',
        'nav-about': 'Про нас',
        'nav-services': 'Послуги',
        'nav-furniture': 'Меблі',
        'nav-sofa': 'Дивани',
        'nav-bed': 'Ліжко',
        'nav-armchair': 'Крісла',
        'nav-wardrobe': 'Шафи',
        'nav-bookshelf': 'Книжкові шафи',
        'nav-ottoman': 'Пуфи',
        'nav-dresser': 'Комоди',
        'nav-nightstand': 'Тумбочки',
        

        // Hero секція
        'hero-title': 'Зробіть свій інтер\'єр<br>мінімалістичним та сучасним',
        'hero-desc': 'Перетворіть свою кімнату на більш мінімалістичну та сучасну легко та швидко',
        'btn-shop': 'Купити зараз',

        // Сторінка каталогу
        'page-title': "М'якi крісла",
        'btn-filter-mobile': 'Показати фільтри',
        'btn-hide-filter': 'Сховати фільтр',
        'label-all': 'Всі',
        'label-sort': 'Сортувати за:',
        'opt-products': 'На сторінці',

        // Сайдбар (Фільтри) - Заголовки
        'filter-title-types': 'Типи',
        'filter-title-price': 'Ціна',
        'filter-title-brand': 'Бренди',
        'filter-title-color': 'Колір',
        'filter-title-kind': 'Вид крісел',

        // Сайдбар - Пункти (Типи)
        'type-office': 'Офісні крісла',
        'type-computer': 'Комп\'ютерні крісла',
        'type-soft': 'М\'які крісла',
        'type-rocking': 'Крісла гойдалки',
        'type-bar': 'Барні крісла',
        'type-kids': 'Дитячі крісла',
        'type-beanbag': 'Безкаркасні крісла',
        'type-massage': 'Масажні крісла',

        // Сайдбар - Ціна та інше
        'price-from': 'від',
        'price-to': 'до',
        
        // Кольори
        'color-white': 'Білий',
        'color-black': 'Чорний',
        'color-pink': 'Рожевий',
        'color-blue': 'Синій',
        'color-yellow': 'Жовтий',
        'color-green': 'Зелений',
        'color-red': 'Червоний',
        'color-orange': 'Оранжевий',
        'color-gold': 'Золотий',
        'color-purple': 'Фіолетовий',
        'color-grey': 'Сірий',
        'color-brown': 'Коричневий',
        'color-beige': 'Бежевий',

        // Картки товарів (Загальне)
        'status-ending': 'Закінчується',
        'status-delivery': 'в наявності',
        'badge-new': 'Новинка',
        'new-arrival': 'Доставка протягом 15 днів',
        'new-season': 'Доставка протягом 7 робочих днів',
    },
    'en': {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-services': 'Services',
        'nav-furniture': 'Furniture',
        'nav-sofa': 'Sofa',
        'nav-armchair': 'Armchair',
        'nav-ottoman': 'Ottoman',

        // Hero Section
        'hero-title': 'Make Your Interior More<br>Minimalistic & Modern',
        'hero-desc': 'Turn your room into a lot more minimal and modern with ease and speed',
        'btn-shop': 'Shop Now',

        // Catalog Page
        'page-title': 'Armchairs',
        'btn-filter-mobile': 'Show Filters',
        'btn-hide-filter': 'Hide Filter',
        'label-all': 'All',
        'label-sort': 'Sort by:',
        'opt-products': 'On the page',
        

        // Sidebar (Filters) - Titles
        'filter-title-types': 'Types',
        'filter-title-price': 'Price',
        'filter-title-brand': 'Brands',
        'filter-title-color': 'Color',
        'filter-title-kind': 'Kind',

        // Sidebar - Items
        'type-office': 'Office Chairs',
        'type-computer': 'Computer Chairs',
        'type-soft': 'Soft Chairs',
        'type-rocking': 'Rocking Chairs',
        'type-bar': 'Bar Chairs',
        'type-kids': 'Kids Chairs',
        'type-beanbag': 'Bean Bags',
        'type-massage': 'Massage Chairs',

        // Sidebar - Price & Misc
        'price-from': 'from',
        'price-to': 'to',

        // Colors
        'color-white': 'White',
        'color-black': 'Black',
        'color-pink': 'Pink',
        'color-blue': 'Blue',
        'color-yellow': 'Yellow',
        'color-green': 'Green',
        'color-red': 'Red',
        'color-orange': 'Orange',
        'color-gold': 'Gold',
        'color-purple': 'Purple',
        'color-grey': 'Gray',
        'color-brown': 'Brown',
        'color-beige': 'Beige',

        // Product Cards (General)
        'status-ending': 'Ends',
        'status-delivery': 'in stock',
        'badge-new': 'New',
        'new-arrival': 'Delivery within 15 days',
        'new-season': 'Delivery within 7 working days',
    }
};

function setLanguage(lang) {
    // 1. Зберігаємо вибір мови, щоб при оновленні сторінки вона не збивалась
    localStorage.setItem('language', lang);

    // 2. Змінюємо активний клас на кнопках
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    // Знаходимо кнопку, яку натиснули (по тексту або onClick) і робимо активною
    // Для простоти можна просто додати логіку стилів або залишити як є
    
    // 3. Проходимось по всіх елементах з атрибутом data-key
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            // Використовуємо innerHTML, щоб працювали теги <br>
            element.innerHTML = translations[lang][key];
        }
    });
}

// При завантаженні сторінки перевіряємо, яка мова була вибрана раніше
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en'; // UA за замовчуванням
    setLanguage(savedLang);
});