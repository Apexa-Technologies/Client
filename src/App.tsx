import AppRoutes from "./routes";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function App() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/dashboard')
    }, [])

    return <AppRoutes />;
}
