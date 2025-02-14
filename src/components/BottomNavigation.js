import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../style/BottomNavigation.css'

function BottomNavigation() {
    const navigate = useNavigate();
    const location = useLocation();

    const [currentScreen, setCurrentScreen] = useState("/");

    useEffect(() => {
        setCurrentScreen(location.pathname);
    }, [location]);

    return (
        <nav className="bottom-navigation">
            {/* Home */}
            <div 
                onClick={() => navigate("/")}
                className={`nav-item ${
                    currentScreen === "/" ? "active" : "inactive"
                }`}>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-xs text-center">Home</p>
                </div>
            </div>

            {/* Earn */}
            <div 
                onClick={() => navigate("/earn")}
                className={`nav-item ${
                    currentScreen === "/earn" ? "active" : "inactive"
                }`}>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-xs text-center">Earn</p>
                </div>
            </div>

        </nav>
    );
}

export default BottomNavigation;
