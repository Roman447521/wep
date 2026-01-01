function openTab(evt, contentId) {
    let i, tabcontent, tablinks;

    // 1. Приховати весь вміст (всі елементи з класом "tab-content")
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        // Приховуємо вміст, використовуючи властивість display
        tabcontent[i].style.display = "none";
        // Видаляємо клас "active" для CSS-стилізації прихованого вмісту
        tabcontent[i].classList.remove('active');
    }

    // 2. Деактивувати всі кнопки (всі елементи з класом "tab-btn")
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        // Видаляємо клас "active" для CSS-стилізації неактивних кнопок
        tablinks[i].classList.remove("active");
    }

    // 3. Показати вибраний вміст
    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
         // Показуємо вибраний вміст
        selectedContent.style.display = "block";
         // Додаємо клас "active" для CSS-стилізації
        selectedContent.classList.add('active');
    }

    // 4. Активувати натиснуту кнопку
    // evt.currentTarget - це елемент, на який було здійснено клік
    evt.currentTarget.classList.add("active");
}

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    // Знаходимо першу кнопку, яка має клас 'active' за замовчуванням
    const defaultTab = document.querySelector('.product-tabs .tab-btn.active');
    
    if (defaultTab) {
        // Витягуємо id вмісту, який має бути показаний
        const onclickAttribute = defaultTab.getAttribute('onclick');
        // Регулярний вираз для отримання 'chair-content' з рядка
        const contentIdMatch = onclickAttribute ? onclickAttribute.match(/'([^']+)'/) : null;
        
        if (contentIdMatch && contentIdMatch[1]) {
            const defaultContentId = contentIdMatch[1];
            // Показуємо вміст першої вкладки
            const defaultContent = document.getElementById(defaultContentId);
            if (defaultContent) {
                defaultContent.style.display = "block";
            }
        }
    }
});



/* ====== 1. ЛОГІКА ДЛЯ ВКЛАДОК (BEST SELLING) ====== */


function openTab(evt, contentId) {
    let i, tabcontent, tablinks;

    // 1. Приховуємо ВЕСЬ вміст
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove('active');
    }

    // 2. Деактивуємо всі КНОПКИ
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // 3. Показуємо той ВМІСТ, на який натиснули
    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = "block";
        selectedContent.classList.add('active');
    }

    // 4. Активуємо ту КНОПКУ, на яку натиснули
    evt.currentTarget.classList.add("active");
}


/* ====== 2. ЛОГІКА ІНІЦІАЛІЗАЦІЇ ТА КАРУСЕЛІ ВІДГУКІВ ====== */

document.addEventListener('DOMContentLoaded', () => {

    // --- ІНІЦІАЛІЗАЦІЯ ВКЛАДОК (Щоб показати першу вкладку "Chair") ---
    
    const defaultTab = document.querySelector('.product-tabs .tab-btn.active');
    if (defaultTab) {
        const onclickAttribute = defaultTab.getAttribute('onclick');
        const contentIdMatch = onclickAttribute ? onclickAttribute.match(/'([^']+)'/) : null;
        if (contentIdMatch && contentIdMatch[1]) {
            const defaultContentId = contentIdMatch[1];
            const defaultContent = document.getElementById(defaultContentId);
            if (defaultContent) {
                defaultContent.style.display = "block";
            }
        }
    }

    // --- НОВА ЛОГІКА ДЛЯ КАРУСЕЛІ "OUR CLIENT REVIEWS" ---
    
    const reviewCards = document.querySelectorAll('.testimonial-card');
    const prevButton = document.querySelector('.testimonials-gallery .prev-arrow');
    const nextButton = document.querySelector('.testimonials-gallery .next-arrow');
    
    const totalCards = reviewCards.length;
    const visibleCards = 3; // Кількість видимих карток

    // Запускаємо логіку, ТІЛЬКИ якщо карток більше, ніж видимих
    if (totalCards > visibleCards) {
        
        let currentIndex = 0; // Індекс ПЕРШОЇ видимої картки

        // Функція, яка показує правильні 3 картки
        function showReviewCards() {
            // 1. Ховаємо всі картки
            reviewCards.forEach(card => card.classList.remove('active'));

            // 2. Показуємо 3 потрібні картки "по колу"
            for (let i = 0; i < visibleCards; i++) {
                // Оператор % (залишок від ділення) забезпечує "зациклення"
                let cardIndex = (currentIndex + i) % totalCards;
                reviewCards[cardIndex].classList.add('active');
            }
        }

        // 4. Логіка для кнопки "Наступний"
        nextButton.addEventListener('click', () => {
            // Зміщуємо індекс на 1
            currentIndex++;
            // Якщо індекс вийшов за межі, повертаємо на 0
            if (currentIndex >= totalCards) {
                currentIndex = 0;
            }
            showReviewCards();
        });

        // 5. Логіка для кнопки "Попередній"
        prevButton.addEventListener('click', () => {
            // Зміщуємо індекс назад на 1
            currentIndex--;
            // Якщо індекс став менше 0, переходимо в кінець
            if (currentIndex < 0) {
                currentIndex = totalCards - 1;
            }
            showReviewCards();
        });

        // 6. На старті показуємо перші 3 картки
        showReviewCards();

    } else {
        // Якщо карток 3 або менше, просто показуємо їх всі
        reviewCards.forEach(card => card.classList.add('active'));
    }

}); // Кінець 'DOMContentLoaded'



/* =================================================== */
/* ====== скрипт для сторінок з  випадаючої кнопки ====== */
/* =================================================== */
 // Функція для відкриття/закриття бічної панелі
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    sidebar.classList.toggle('show');
    overlay.classList.toggle('show');
}

const wishlistButtons = document.querySelectorAll('.wishlist-btn');

wishlistButtons.forEach(button => {
button.addEventListener('click', function() {
    const icon = this.querySelector('i');
    
    // Перемикаємо класи: якщо пусте - стане повним, і навпаки
    if (icon.classList.contains('bi-heart')) {
        icon.classList.remove('bi-heart');
        icon.classList.add('bi-heart-fill');
        this.style.color = 'red'; // Робимо червоним при активності
    } else {
        icon.classList.remove('bi-heart-fill');
        icon.classList.add('bi-heart');
        this.style.color = '#999'; // Повертаємо сірий колір
    }
});
});

