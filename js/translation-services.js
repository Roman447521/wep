// Language translation script (UA / EN)

const translations = {
    en: {
        // Navigation
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

        // Services page
        "services-title": "Our Services",
        "services-subtitle": "Professional furniture transportation with care, safety, and flexibility",
        "services-what": "What We Provide",
        "service-transport-title": "Furniture Transportation",
        "service-transport-text": "Safe and reliable delivery of sofas, beds, wardrobes, chairs, and other furniture directly to your location.",
        "service-extra-title": "Additional Items Delivery",
        "service-extra-text": "Need to transport extra furniture or packages? We offer additional delivery services for an extra price.",
        "service-care-title": "Careful Handling",
        "service-care-text": "Our experienced team ensures careful loading, unloading, and protection of your items during transport.",
        "service-quality-subtitle": "SERVICE QUALITY",
        "service-quality-title": "Reliable & Affordable Delivery",
        "service-quality-text": "We understand how important your furniture is. That’s why we focus on safe transportation, punctual delivery, and transparent pricing without hidden fees."
    },

    ua: {
        // Navigation
        "nav-home": "Головна",
        "nav-about": "Про нас",
        "nav-services": "Послуги",
        "nav-furniture": "Меблі",
        "nav-sofa": "Диван",
        "nav-bed": "Ліжко",
        "nav-chair": "Крісло",
        "nav-wardrobe": "Шафа",
        "nav-bookshelf": "Книжкова шафа",
        "nav-ottoman": "Пуф",

        // Services page
        "services-title": "Наші послуги",
        "services-subtitle": "Професійне транспортування меблів з турботою, безпекою та гнучкістю",
        "services-what": "Що ми пропонуємо",
        "service-transport-title": "Транспортування меблів",
        "service-transport-text": "Безпечна та надійна доставка диванів, ліжок, шаф, крісел та інших меблів прямо до вашого місця.",
        "service-extra-title": "Доставка додаткових предметів",
        "service-extra-text": "Потрібно перевезти додаткові меблі або посилки? Ми пропонуємо додаткові послуги за окрему плату.",
        "service-care-title": "Обережне поводження",
        "service-care-text": "Наша досвідчена команда забезпечує акуратне завантаження, розвантаження та захист ваших речей під час перевезення.",
        "service-quality-subtitle": "ЯКІСТЬ СЕРВІСУ",
        "service-quality-title": "Надійна та доступна доставка",
        "service-quality-text": "Ми розуміємо, наскільки важливі для вас меблі. Саме тому ми зосереджуємось на безпечному транспортуванні, своєчасній доставці та прозорому ціноутворенні без прихованих платежів."
    }
};

function setLanguage(lang) {
    localStorage.setItem("language", lang);

    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.getAttribute("data-key");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Load saved language on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "en";
    setLanguage(savedLang);
});
