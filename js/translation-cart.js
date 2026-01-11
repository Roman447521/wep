const translations = {
    ua: {
        /* ================= NAVIGATION ================= */
        "nav-home": "Головна",
        "nav-about": "Про нас",
        "nav-services": "Послуги",
        "nav-furniture": "Меблі",
        "nav-sofa": "Дивани",
        "nav-bed": "Ліжка",
        "nav-chair": "Крісла",
        "nav-wardrobe": "Шафи",
        "nav-bookshelf": "Полиці",
        "nav-ottoman": "Пуфи",

        /* ================= CART ================= */
        "cart-title": "Кошик",
        "cart-subtitle": "Ваші обрані товари будуть відображатися тут",
        "cart-empty-title": "Кошик порожній",
        "cart-empty-text": "Ви ще не додали жодного товару. Почніть перегляд нашої колекції меблів.",
        "cart-btn-home": "Повернутися на головну",

        /* ================= FOOTER ================= */
        "footer-desc": "Мінімалістичні та сучасні меблі для вашого ідеального інтер’єру",
        "footer-services": "Послуги",
        "footer-support": "Підтримка",
        "footer-links": "Посилання",
        "footer-rights": "Усі права захищені"
    },

    en: {
        /* ================= NAVIGATION ================= */
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-services": "Services",
        "nav-furniture": "Furniture",
        "nav-sofa": "Sofa",
        "nav-bed": "Bed",
        "nav-chair": "Armchair",
        "nav-wardrobe": "Wardrobe",
        "nav-bookshelf": "Bookshelf",
        "nav-ottoman": "Ottoman",

        /* ================= CART ================= */
        "cart-title": "Shopping Cart",
        "cart-subtitle": "Your selected products will appear here",
        "cart-empty-title": "Your cart is empty",
        "cart-empty-text": "You haven’t added any products yet. Start exploring our furniture collection.",
        "cart-btn-home": "Go to Home Page",

        /* ================= FOOTER ================= */
        "footer-desc": "Minimalistic and modern furniture for your perfect interior",
        "footer-services": "Services",
        "footer-support": "Support",
        "footer-links": "Links",
        "footer-rights": "All rights reserved"
    }
};

/* ===== LANGUAGE SWITCH FUNCTION ===== */
function setLanguage(lang) {
    if (!translations[lang]) return;

    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    localStorage.setItem("language", lang);
}

/* ===== LOAD SAVED LANGUAGE ===== */
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "ua";
    setLanguage(savedLang);
});
