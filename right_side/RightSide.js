import { useState } from 'react';
import { locales, languages } from './dependencies/Locales';
import { socialLinks } from './dependencies/Social';
import LanguageSwitcher from './components/LanguageSwitcher';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import ActionButtons from './components/ActionButtons';
import SocialLinks from './components/SocialLinks';
import { LeftGradient, BottomRightGradient } from './styles/Gradients';

function RightSide() {
    const [language, setLanguage] = useState('en');
    const t = locales[language];

    return (
        <div className="w-1/2 relative flex flex-col p-16 md:p-20 lg:p-24 bg-[#151515] overflow-hidden">
            {/* Градиенты */}
            <LeftGradient />
            <BottomRightGradient />

            {/* Переключатель языка */}
            <LanguageSwitcher
                language={language}
                setLanguage={setLanguage}
                languages={languages}
            />

            {/* Основной контент */}
            <div className="flex-1 flex items-center relative z-10">
                <div className="flex flex-col space-y-12 max-w-3xl">
                    <Hero t={t} language={language} />
                    {/*<Statistics />*/}
                    <ActionButtons t={t} />
                    <SocialLinks socialLinks={socialLinks} />
                </div>
            </div>
        </div>
    );
}

export default RightSide;