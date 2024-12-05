import { Outlet, useNavigate } from "react-router-dom";
import arrow from "../../assets/arrow2.svg";
import { useEffect, useState } from "react";
import { RoutePath } from "../../constants/path";

export default function SettingsPage() {
    const [selectedPage, setPage] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        navigate(RoutePath.Account, { replace: true });
    }, []);

    return (
        <div className="w-screen h-screen bg-darkprimary flex flex-col p-10">
            <div className="flex justify-between mb-8 relative">
                <button
                    className="max-h-fit max-w-fit p-0 hover:opacity-60 transition-all"
                    onClick={() =>
                        navigate(`/${RoutePath.Dashboard}`, { replace: true })
                    }
                >
                    <img src={arrow} className="h-10" />
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 flex gap-8 pl-6 pr-6 p-2 bg-primary/40 rounded-full">
                    <a
                        className={`text-xl p-2 transition-all hover:cursor-pointer hover:opacity-100 ${
                            selectedPage == 1 ? "opacity-100" : "opacity-60"
                        }`}
                        onClick={() => {
                            setPage(1);
                            navigate(RoutePath.Account, { replace: true });
                        }}
                    >
                        Account
                    </a>
                    <a
                        className={`text-xl p-2 transition-all hover:cursor-pointer hover:opacity-100 ${
                            selectedPage == 2 ? "opacity-100" : "opacity-60"
                        }`}
                        onClick={() => {
                            setPage(2);
                            navigate(`${RoutePath.General}`, { replace: true });
                        }}
                    >
                        General
                    </a>
                    <a
                        className={`text-xl p-2 transition-all hover:cursor-pointer hover:opacity-100 ${
                            selectedPage == 3 ? "opacity-100" : "opacity-60"
                        }`}
                        onClick={() => {
                            setPage(3);
                            navigate(RoutePath.Security, { replace: true });
                        }}
                    >
                        Security
                    </a>
                </div>
                <h1 className="text-5xl">Settings</h1>
            </div>
            <div className="flex grow gap-5">
                <div className="bg-primary h-full grow rounded-3xl">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
