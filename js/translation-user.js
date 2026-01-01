const translations = {
    'ua': {
        // Навігація
        'nav-home': 'Головна',
        'nav-about': 'Про нас',
        'nav-services': 'Послуги',

        // Заголовки
        'reg-title': 'Реєстрація',
        'reg-subtitle': 'Створіть акаунт, щоб отримати доступ до всіх можливостей',

        // Лейбли форми
        'label-name': 'Повне ім\'я',
        'label-email': 'Email адреса',
        'label-phone': 'Телефон',
        'label-pass': 'Пароль',
        'label-confirm': 'Підтвердіть пароль',


        // Угода та кнопки
        'terms-agree': 'Я погоджуюсь з',
        'btn-register': 'Зареєструватися',
        'divider-or': 'або продовжити з',
        'link-have-account': 'Вже є акаунт?',
        'link-login': 'Увійти',

    },
    'en': {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-services': 'Services',

        // Headers
        'reg-title': 'Registration',
        'reg-subtitle': 'Create an account to access all features',

        // Labels
        'label-name': 'Full Name',
        'label-email': 'Email Address',
        'label-phone': 'Phone',
        'label-pass': 'Password',
        'label-confirm': 'Confirm Password',

        // Terms & Buttons
        'terms-agree': 'I agree with',
        'terms-cond': 'terms of use',
        'terms-and': 'and',
        'terms-policy': 'privacy policy',
        'btn-register': 'Sign Up',
        'divider-or': 'or continue with',
        'link-have-account': 'Already have an account?',
        'link-login': 'Log In',

    }
};

// Змінна для збереження поточної мови (для alert)
let currentLang = 'ua';

function setLanguage(lang) {
    currentLang = lang; // Оновлюємо глобальну змінну
    localStorage.setItem('language', lang);
    
    // Кнопки
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });

    // Текстові елементи
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Плейсхолдери (підказки в інпутах)
    const inputs = document.querySelectorAll('[data-placeholder]');
    inputs.forEach(input => {
        const key = input.getAttribute('data-placeholder');
        if (translations[lang][key]) {
            input.placeholder = translations[lang][key];
        }
    });
}

// Запуск при завантаженні
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
});

// Валідація форми
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    // Використовуємо translations[currentLang] для повідомлень
    if (password !== confirmPassword) {
        alert(translations[currentLang]['alert-mismatch']);
        return;
    }
    
    if (password.length < 8) {
        alert(translations[currentLang]['alert-length']);
        return;
    }
    
    alert(translations[currentLang]['alert-success']);
});