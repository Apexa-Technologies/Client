import AppRoutes from "./routes";
import { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function App() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/dashboard')
    }, [])

    axios.defaults.baseURL = "http://localhost:8000/api/";

    return <AppRoutes />;
}
