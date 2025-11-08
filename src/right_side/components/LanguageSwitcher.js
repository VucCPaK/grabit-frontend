function LanguageSwitcher({ language, setLanguage, languages }) {
    return (
        <div className="absolute top-8 right-8 flex gap-2 z-20">
            {languages.map(lang => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-3 py-1.5 rounded text-xs font-medium transition-all border ${
                        language === lang.code
                            ? 'bg-white text-black border-white'
                            : 'bg-transparent text-gray-400 border-gray-700 hover:text-white hover:border-gray-500'
                    }`}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
}

export default LanguageSwitcher;