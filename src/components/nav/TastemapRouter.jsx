import { BrowserRouter, Routes, Route } from "react-router-dom";
import TastemapNavbar from "./TastemapNavbar";
import Collections from "./pages/Collections";
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Restaurants from './pages/Restaurants';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';

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
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    );
}