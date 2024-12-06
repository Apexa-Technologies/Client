import page from "./main.module.scss";
import Sidebar from "../components/sidebar/sidebar";
import Topbar from "../components/topbar/topbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/api";

export default function Layout() {
    const navigate = useNavigate();

    const { data, isLoading } = useQuery({
        queryKey: ["User"],
        queryFn: getUser,
        staleTime: 1000 * 60,
    });

    if (!isLoading && !data) {
        navigate("login", { replace: true });
    }

    if (isLoading) return <h1>Loading</h1>;

    if (data)
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
