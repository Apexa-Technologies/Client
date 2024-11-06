import Sidebar from "../components/sidebar/sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/api";

export default function Layout() {
    const navigate = useNavigate();

    const { data, isLoading } = useQuery({
        queryKey: ["User"],
        queryFn: getUser,
        staleTime: 1000 * 60 * 5,
    });

    if (!isLoading && !data) {
        navigate("login", { replace: true });
    }

    if (isLoading) return <h1>Loading</h1>;

    if (data)
        return (
            <div className="min-h-screen min-w-full p-5 flex gap-4 overflow-hidden">
                <div className="grow flex gap-4 overflow-y-hidden max-h-screen">
                    <Sidebar />
                    <div className="mb-10 w-full min-h-fit overflow-y-scroll">
                        <Outlet />
                    </div>
                </div>
            </div>
        );
}
