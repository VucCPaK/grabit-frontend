function ActionButtons({ t }) {
    const handleStartClick = () => {
        window.open('https://www.faceit.com/ru/organizers/a1e79b09-7c51-4f52-a18e-3ae699606581/GrabIt%20eSports', '_blank');
    };

    const handleLearnClick = () => {
        window.open('https://t.me/grabit_esports', '_blank');
    };

    return (
        <div className="flex items-center gap-6">
            {/* Кнопка регистрации */}
            <button
                onClick={handleStartClick}
                className="bg-[#d0d4da] text-black px-8 py-3.5 rounded-lg text-base font-medium hover:bg-[#e0e3e7] active:scale-[0.98] transition-all shadow-lg shadow-gray-400/20 cursor-pointer"
            >
                {t.btnStart}
            </button>

            {/* Кнопка Learn More */}
            <button
                onClick={handleLearnClick}
                className="text-gray-300 hover:text-white flex items-center gap-2 text-base font-medium transition-colors group cursor-pointer bg-transparent border-0"
            >
                {t.btnLearn}
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </button>
        </div>
    );
}

export default ActionButtons;