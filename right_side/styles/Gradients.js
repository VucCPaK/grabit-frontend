function LeftGradient() {
    return (
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none z-10"></div>
    );
}

function BottomRightGradient() {
    return (
        <div
            className="absolute pointer-events-none z-0"
            style={{
                right: '-45%',
                bottom: '-45%',
                width: '70%',
                height: '80%',
                background: 'radial-gradient(ellipse 150% 80% at center, rgba(255, 220, 0, 0.8) 0%, rgba(255, 180, 0, 0.7) 15%, rgba(255, 160, 0, 0.6) 30%, rgba(230, 120, 0, 0.4) 45%, rgba(180, 90, 0, 0.25) 60%, transparent 80%)',
                filter: 'blur(90px)',
                transform: 'rotate(-45deg)',
                transformOrigin: 'center'
            }}
        ></div>
    );
}

export { LeftGradient, BottomRightGradient };