import { useEffect, useState } from "react";
import settings from "../../../assets/settings.svg";
import help from "../../../assets/help.svg";
import page from "./topbar.module.scss";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../../constants/path";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../../api/api";
import toast from "react-hot-toast";
import * as userTypes from "../../../types/user";

export default function DashboardTopbar() {
    const navigate = useNavigate();

    interface UserQueryResult {
        isPending: boolean;
        error: any;
        data: userTypes.user | undefined;
        isFetching: boolean;
    }

    const { isPending, error, data, isFetching }: UserQueryResult = useQuery<
        userTypes.user,
        Error
    >({
        queryKey: ["User"],
        queryFn: getUser,
        staleTime: 1000 * 60,
    });

    function Topbar_Buttons() {
        return (
            <div className={page.Topbar_Buttons}>
                <button
                    onClick={() =>
                        navigate(RoutePath.Settings, { replace: true })
                    }
                >
                    <img src={settings} />
                </button>
                <button>
                    <img src={help} />
                </button>
            </div>
        );
    }

    function Topbar_Date() {
        const [date, setDate] = useState(new Date());
        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        let weekday = days[date.getDay()];

        useEffect(() => {
            const intervalId = setInterval(() => {
                const updatedToday = new Date();
                if (updatedToday.getDate() !== date.getDate()) {
                    setDate(new Date());
                }
            }, 1000);
            return () => clearInterval(intervalId);
        }, []);

        const nth = (d: number) => {
            const dString = String(d);
            const last = +dString.slice(-2);
            if (last > 3 && last < 21) return "th";
            switch (last % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        };

        return (
            <p className={page.Topbar_Date}>
                {weekday}, {date.getDate()}
                {nth(date.getDate())}
            </p>
        );
    }

    if (isFetching || isPending) {
        return (
            <div className={page.Topbar_Wrapper}>
                <h1>loading</h1>
            </div>
        );
    }

    if (error) {
        toast.error("Error fetching data");
    }

    if (data && !isFetching && !isPending)
        return (
            <div className={page.Topbar_Wrapper}>
                <p className={page.Welcome_Message}>
                    Welcome Back, {data.firstName}!
                </p>
                <p className={page.Title}>Apexa Journal</p>
                <div className={page.Topbar_Right}>
                    <Topbar_Date />
                    <Topbar_Buttons />
                </div>
            </div>
        );
}
