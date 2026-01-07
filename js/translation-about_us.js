const translations = {
    ua: {
        // NAV
        "nav-home": "Головна",
        "nav-about": "Про нас",
        "nav-services": "Послуги",

        // HERO
        "hero-title": "Про Furni",
        "hero-desc": "Мінімалістичні та сучасні меблі для комфортного життя",

        // WHO WE ARE
        "who-subtitle": "ХТО МИ",
        "who-title": "Створено людьми, які люблять меблі",
        "who-text-1": "Furni була заснована двома професіоналами, які поділяють пристрасть до сучасних інтер'єрів та якісних меблів.",
        "who-text-2": "Ми особисто контролюємо кожну колекцію — від ідеї та дизайну до матеріалів і деталей.",

        // FOUNDERS
       
        "founder1-desc": "Співзасновник та креативний директор<br>10+ років у дизайні меблів.",
        
        "founder2-desc": "Співзасновник та операційний директор<br>Експерт з матеріалів і виробництва.",

        // OFFER
        "offer-subtitle": "ЩО МИ ПРОПОНУЄМО",
        "offer-title": "Меблі для сучасного життя",
        "offer-text-1": "Від диванів і крісел до ліжок і шаф.",
        "offer-text-2": "Кожен виріб поєднує красу, надійність і комфорт.",

        // WHY
        "why-title": "Чому обирають Furni",
        "why-1-title": "Сучасний дизайн",
        "why-1-text": "Наші меблі відповідають сучасним трендам.",
        "why-2-title": "Якісні матеріали",
        "why-2-text": "Ми використовуємо тільки перевірені матеріали.",
        "why-3-title": "Комфорт клієнта",
        "why-3-text": "Усе створено з думкою про ваш комфорт."
    },

    en: {
        // NAV
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-services": "Services",

        // HERO
        "hero-title": "About Furni",
        "hero-desc": "Minimalistic & modern furniture for comfortable living",

        // WHO WE ARE
        "who-subtitle": "WHO WE ARE",
        "who-title": "Built by People Who Love Furniture",
        "who-text-1": "Furni was founded by two professionals passionate about modern interiors and quality furniture.",
        "who-text-2": "We personally oversee every collection — from concept to final details.",

        // FOUNDERS
        
        "founder1-desc": "Co-Founder & Creative Director<br>10+ years in furniture design.",
        
        "founder2-desc": "Co-Founder & Operations Lead<br>Expert in materials and production.",

        // OFFER
        "offer-subtitle": "WHAT WE OFFER",
        "offer-title": "Furniture Designed for Modern Living",
        "offer-text-1": "From sofas and armchairs to beds and wardrobes.",
        "offer-text-2": "Every piece combines beauty, durability, and comfort.",

        // WHY
        "why-title": "Why Choose Furni",
        "why-1-title": "Modern Design",
        "why-1-text": "Our furniture follows modern trends.",
        "why-2-title": "Quality Materials",
        "why-2-text": "We use carefully selected materials.",
        "why-3-title": "Customer Comfort",
        "why-3-text": "Designed with your comfort in mind."
    }
};

function setLanguage(lang) {
    localStorage.setItem("language", lang);
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.dataset.key;
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(localStorage.getItem("language") || "en");
});
