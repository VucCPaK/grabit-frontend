function Hero({ t, language }) {
    // Определяем размер шрифта в зависимости от языка
    const getTextSize = () => {
        switch(language) {
            case 'en':
                return 'text-xl md:text-2xl';
            case 'ru':
                return 'text-lg md:text-xl';
            case 'ua':
                return 'text-xl md:text-2xl';
            default:
                return 'text-xl md:text-2xl';
        }
    };

    const textSizeClass = getTextSize();

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight font-orbitron">
                    <span className="text-[#e5e5e5]">{t.title1} </span>
                    <span className="font-black bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                        {t.title2}
                    </span>
                </h1>

                <div className="w-32 h-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-400 rounded-full"></div>
            </div>

            <div className="space-y-3">
                <p className={`${textSizeClass} text-gray-200 leading-relaxed font-normal font-exo`}>
                    {t.description.line1}
                    <span className="text-orange-400 font-semibold">{t.description.highlight1}</span>
                    {t.description.line2}
                </p>
                <p className={`${textSizeClass} text-gray-300 leading-relaxed font-normal font-exo`}>
                    {t.description.line3}
                    <span className="text-yellow-400 font-semibold">{t.description.highlight2}</span>
                    {t.description.line4}
                </p>
            </div>
        </div>
    );
}

export default Hero;