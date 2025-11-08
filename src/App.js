import LeftSide from './left_side/LeftSide';
import RightSide from './right_side/RightSide';

function App() {
    return (
        <div className="flex flex-col md:flex-row h-screen overflow-hidden bg-gradient-to-r from-[#0f0f0f] via-[#0c0c0c] to-[#0a0a0a]">
            <LeftSide />
            <RightSide />
        </div>
    );
}

export default App;