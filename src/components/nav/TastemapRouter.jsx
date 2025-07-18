import { BrowserRouter, Routes, Route } from "react-router-dom";
import TastemapNavbar from "./TastemapNavbar";
import Collections from "./pages/Collections";
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Restaurants from './pages/Restaurants';

export default function TastemapRouter({ collected, toggleCollected }) {
    return (
        <BrowserRouter> { }
            <TastemapNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/restaurants"
                    element={<Restaurants collected={collected} toggleCollected={toggleCollected} />}
                />
                <Route
                    path="/collections"
                    element={<Collections collected={collected} toggleCollected={toggleCollected} />}
                />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    );
}