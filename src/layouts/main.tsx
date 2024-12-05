import page from "./main.module.scss";
import Sidebar from "../components/sidebar/sidebar";
import Topbar from "../components/topbar/topbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Layout() {
    const navigate = useNavigate();
    useEffect(() => {
        let key = localStorage.getItem("AUTH");
        if (!key) {
            navigate("login");
        }
    });
    return (
        <div className={page.page}>
            <Sidebar />
            <div className={page.Main}>
                <Topbar />
                <div className={page.Content}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
