import { useState } from 'react';
import grabitLogo from '../assets/images/grabit_logo.svg';
import grabitBackground from '../assets/images/grabit_background.jpg';

function LeftSide() {
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
    };

    return (
        <div className="w-1/2 relative flex items-center justify-center overflow-hidden">
            {/* Фоновое изображение */}
            <img
                src={grabitBackground}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* SVG логотип с голографическим эффектом */}
            <div
                className="relative z-10 cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                style={{
                    width: '450px',
                    height: '450px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]">
                    {/* Оригинальный логотип */}
                    <img
                        src={grabitLogo}
                        alt="Grabit Esports Logo"
                        className="absolute inset-0 w-full h-full object-contain"
                        style={{
                            transform: isHovering
                                ? `perspective(800px) rotateX(${(mousePosition.y - 50) * 0.3}deg) rotateY(${(mousePosition.x - 50) * -0.3}deg)`
                                : 'perspective(800px) rotateX(0deg) rotateY(0deg)',
                            transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            imageRendering: 'crisp-edges'
                        }}
                    />

                    {/* Голографический слой для букв и обводок */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: isHovering ? `
                                linear-gradient(
                                    ${mousePosition.x * 3.6}deg,
                                    rgba(100, 200, 255, 0.25) 0%,
                                    rgba(200, 100, 255, 0.25) 25%,
                                    rgba(255, 100, 200, 0.25) 50%,
                                    rgba(255, 200, 100, 0.25) 75%,
                                    rgba(100, 255, 200, 0.25) 100%
                                )
                            ` : 'transparent',
                            WebkitMaskImage: `url(${grabitLogo})`,
                            maskImage: `url(${grabitLogo})`,
                            WebkitMaskSize: 'contain',
                            maskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            maskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                            maskPosition: 'center',
                            WebkitMaskComposite: 'source-in',
                            maskComposite: 'intersect',
                            mixBlendMode: 'overlay',
                            filter: 'contrast(1.3) brightness(1.2)',
                            transform: isHovering
                                ? `perspective(800px) rotateX(${(mousePosition.y - 50) * 0.3}deg) rotateY(${(mousePosition.x - 50) * -0.3}deg)`
                                : 'perspective(800px) rotateX(0deg) rotateY(0deg)',
                            opacity: isHovering ? 1 : 0,
                            transition: 'background 0.15s ease-out, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out',
                            clipPath: 'inset(0)'
                        }}
                    />

                    {/* Дополнительный слой для усиления эффекта на светлых частях */}
                    <img
                        src={grabitLogo}
                        alt=""
                        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                        style={{
                            filter: isHovering ? `
                                hue-rotate(${mousePosition.x * 3.6}deg) 
                                brightness(1.5) 
                                saturate(2)
                                contrast(2)
                            ` : 'brightness(1) saturate(1) contrast(1)',
                            mixBlendMode: 'color-dodge',
                            opacity: isHovering ? 0.15 : 0,
                            transform: isHovering
                                ? `perspective(800px) rotateX(${(mousePosition.y - 50) * 0.3}deg) rotateY(${(mousePosition.x - 50) * -0.3}deg)`
                                : 'perspective(800px) rotateX(0deg) rotateY(0deg)',
                            transition: 'filter 0.15s ease-out, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease-out',
                            maskImage: `linear-gradient(to bottom, black 0%, black 60%, transparent 100%)`
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default LeftSide;