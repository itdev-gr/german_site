import { translations } from "../data/translations.js";

const LANGS = ["de", "en", "el"];
const STORAGE_KEY = "wbh-lang";

export function getLang() {
	if (typeof localStorage !== "undefined") {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored && LANGS.includes(stored)) return stored;
	}
	return "de";
}

export function setLang(lang) {
	if (!LANGS.includes(lang)) return;
	localStorage.setItem(STORAGE_KEY, lang);
	document.documentElement.lang = lang;
	applyTranslations(lang);
	// Update toggle buttons
	document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
		btn.classList.toggle("active", btn.dataset.langBtn === lang);
	});
	// Notify other scripts (e.g. menu page) about the language change
	document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

export function applyTranslations(lang) {
	document.querySelectorAll("[data-i18n]").forEach((el) => {
		const key = el.dataset.i18n;
		const t = translations[key];
		if (!t || !t[lang]) return;
		const value = t[lang];
		if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
			if (el.placeholder) el.placeholder = value;
		} else {
			el.innerHTML = value.replace(/\n/g, "<br/>");
		}
	});
}

export function initI18n() {
	const lang = getLang();
	document.documentElement.lang = lang;
	applyTranslations(lang);

	document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
		btn.classList.toggle("active", btn.dataset.langBtn === lang);
		btn.addEventListener("click", () => {
			setLang(btn.dataset.langBtn);
		});
	});
}
