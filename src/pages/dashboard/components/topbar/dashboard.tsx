import { useEffect, useState } from "react";
import settings from "../../../../assets/settings.svg";
import help from "../../../../assets/help.svg";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../../../constants/path";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../../../api/api";
import toast from "react-hot-toast";
import * as userTypes from "../../../../types/user";

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
            <div className="flex gap-3">
                <button
                    className="p-2.5 rounded-full hover:opacity-70 transition-all bg-darkprimary/60"
                    onClick={() =>
                        navigate(RoutePath.Settings, { replace: true })
                    }
                >
                    <img src={settings} />
                </button>
                <button className="p-2.5 rounded-full hover:opacity-70 transition-all bg-darkprimary/60">
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
            <p className="text-3xl">
                {weekday}, {date.getDate()}
                {nth(date.getDate())}
            </p>
        );
    }

    if (isFetching || isPending) {
        return (
            <div className="h-16 relative rounded-full bg-primary flex items-center p-5 justify-between">
                <h1>loading</h1>
            </div>
        );
    }

    if (error) {
        toast.error("Error fetching data");
    }

    if (data && !isFetching && !isPending)
        return (
            <div className="h-16 relative rounded-full bg-primary flex items-center p-5 justify-between">
                <p className="text-3xl font-normal">
                    Welcome Back, {data.firstName}!
                </p>
                <p className="text-3xl absolute left-2/4 -translate-x-2/4">
                    Apexa Journal
                </p>
                <div className="flex items-center gap-10">
                    <Topbar_Date />
                    <Topbar_Buttons />
                </div>
            </div>
        );
}
