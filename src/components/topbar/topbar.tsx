import { useEffect, useState } from "react";
import settings from "../../assets/settings.svg";
import help from "../../assets/help.svg";
import page from "./topbar.module.scss";

export default function Topbar() {
    const firstName = "Anthony";
    return (
        <div className={page.Topbar_Wrapper}>
            <p className={page.Welcome_Message}>Welcome Back, {firstName}!</p>
            <p className={page.Title}>Apexa Journal</p>
            <div className={page.Topbar_Right}>
                <Topbar_Date />
                <Topbar_Buttons />
            </div>
        </div>
    );
}

function Topbar_Buttons() {
    return (
        <div className={page.Topbar_Buttons}>
            <button>
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
