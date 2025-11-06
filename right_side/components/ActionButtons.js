function ActionButtons({ t }) {
    return (
        <div className="flex items-center gap-6">
            <button className="bg-[#e5e5e5] text-black px-8 py-3.5 rounded-lg text-base font-medium hover:bg-[#e0e3e7] active:scale-[0.98] transition-all shadow-lg shadow-gray-400/20">
                {t.btnStart}
            </button>

            <button className="text-gray-300 hover:text-white flex items-center gap-2 text-base font-medium transition-colors group">
                {t.btnLearn}
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </button>
        </div>
    );
}

export default ActionButtons;