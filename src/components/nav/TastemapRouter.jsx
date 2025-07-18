import { BrowserRouter, Route, Routes } from "react-router";
import TastemapNavbar from "./TastemapNavbar";
import Collections from "./pages/Collections";
import Home from './pages/Home';
import Nomatch from './pages/NoMatch'
import Restaurants from './pages/Restaurants'

export default function TastemapRouter() {
    return (
        <BrowserRouter>
            <TastemapNavbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Restaurants" element={<Restaurants />} />
                <Route path="/Collections" element={<Collections />} />
                <Route path="*" element={<Nomatch />} />
            </Routes>
        </BrowserRouter>
    );
}