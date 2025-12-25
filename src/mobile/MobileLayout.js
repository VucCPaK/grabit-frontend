import { useState } from 'react';
import { locales, languages } from '../right_side/dependencies/Locales';
import { socialLinks } from '../right_side/dependencies/Social';
import grabitLogo from '../assets/images/grabit_logo.svg';

function MobileLayout() {
    const [language, setLanguage] = useState('en');
    const t = locales[language];

    const handleStartClick = () => {
        window.open('https://www.faceit.com/ru/organizers/a1e79b09-7c51-4f52-a18e-3ae699606581/GrabIt%20eSports', '_blank');
    };

    const handleLearnClick = () => {
        window.open('https://t.me/grabit_esports', '_blank');
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] flex flex-col px-6 py-8">
            {/* Переключатель языка */}
            <div className="flex justify-end gap-1.5">
                {languages.map(lang => (
                    <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`px-2.5 py-1 rounded text-xs font-medium transition-all border ${
                            language === lang.code
                                ? 'bg-white text-black border-white'
                                : 'bg-transparent text-gray-400 border-gray-700'
                        }`}
                    >
                        {lang.label}
                    </button>
                ))}
            </div>

            {/* Основной контент по центру */}
            <div className="flex-1 flex flex-col items-center justify-center text-center">
                {/* Логотип */}
                <img
                    src={grabitLogo}
                    alt="Grabit Esports Logo"
                    className="w-32 h-32 mb-8"
                />

                {/* Заголовок */}
                <h1 className="text-4xl font-bold leading-tight tracking-tight font-orbitron mb-6">
                    <span className="text-[#e5e5e5]">{t.title1} </span>
                    <span className="font-black bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                        {t.title2}
                    </span>
                </h1>

                {/* Описание */}
                <p className="text-sm text-gray-300 leading-relaxed font-exo mb-8 max-w-xs">
                    {t.description.line1}
                    <span className="text-orange-400 font-semibold">{t.description.highlight1}</span>
                    {t.description.line2}
                    {' '}
                    {t.description.line3}
                    <span className="text-yellow-400 font-semibold">{t.description.highlight2}</span>
                    {t.description.line4}
                </p>

                {/* Кнопки */}
                <div className="flex flex-col items-center gap-4 mb-10">
                    <button
                        onClick={handleStartClick}
                        className="bg-[#d0d4da] text-black px-8 py-3 rounded-lg text-sm font-medium active:scale-[0.98] transition-all shadow-lg"
                    >
                        {t.btnStart}
                    </button>
                    <button
                        onClick={handleLearnClick}
                        className="text-gray-400 flex items-center gap-2 text-sm font-medium bg-transparent border-0"
                    >
                        {t.btnLearn}
                        <span>→</span>
                    </button>
                </div>
            </div>

            {/* Соц. сети внизу */}
            <div className="flex justify-center gap-6">
                {socialLinks.map(social => {
                    const Icon = social.icon;
                    return (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500"
                            aria-label={social.name}
                        >
                            <Icon className="w-5 h-5" />
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

export default MobileLayout;
