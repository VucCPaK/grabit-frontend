import LeftSide from './left_side/LeftSide';
import RightSide from './right_side/RightSide';
import MobileLayout from "./mobile/MobileLayout";

function App() {
    return (
        <>
            {/* Мобильная версия */}
            <div className="md:hidden">
                <MobileLayout />
            </div>

            {/* Десктоп версия */}
            <div className="hidden md:flex flex-row h-screen overflow-hidden bg-gradient-to-r from-[#0f0f0f] via-[#0c0c0c] to-[#0a0a0a]">
                <LeftSide />
                <RightSide />
            </div>
        </>
    );
}

export default App;