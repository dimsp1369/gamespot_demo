import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import MainLayout from "./layouts/MainLayout";
import Game from "./pages/game";


function App() {

    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path={`/games/:slug`} element={<Game/>}/>
            </Routes>
        </MainLayout>
    );
}

export default App;
