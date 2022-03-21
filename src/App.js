import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./layouts/Nav";
import Guide from "./pages/Guide";
import Home from "./pages/Home";
import Message from "./pages/Message";

const App = () => {
    useEffect(() => {
        document.body.animate(
            {
                opacity: [0, 1],
            },
            {
                easing: "ease-in-out",
                fill: "forwards",
                duration: 3000,
            }
        )
    }, [])
    return (
            <BrowserRouter>
                <Nav></Nav>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/Message" element={<Message />} />
                    <Route path="/Guide" element={<Guide />} />
                </Routes>
            </BrowserRouter>
    );
}

export default App;