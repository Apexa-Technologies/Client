import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../../constants/path";
import Button2 from "../../inputs/button2";
import Search1 from "../../inputs/search1";
import settings from "../../../assets/settings.svg";
import help from "../../../assets/help.svg";

export default function JournalPageTopBar() {
    const navigate = useNavigate();
    const data = [
        {
            day: 1,
        },
        {
            day: 2,
        },
        {
            day: 3,
        },
        {
            day: 4,
        },
        {
            day: 5,
        },
        {
            day: 6,
        },
        {
            day: 7,
        },
        {
            day: 8,
        },
        {
            day: 9,
        },
        {
            day: 10,
        },
        {
            day: 11,
        },
        {
            day: 12,
        },
        {
            day: 13,
        },
        {
            day: 14,
        },
        {
            day: 15,
        },
        {
            day: 16,
        },
        {
            day: 17,
        },
        {
            day: 18,
        },
        {
            day: 19,
        },
        {
            day: 20,
        },
        {
            day: 21,
        },
        {
            day: 22,
        },
        {
            day: 23,
        },
        {
            day: 24,
        },
        {
            day: 25,
        },
    ];

    function Days() {
        return data.slice(-10).map((day: any) => {
            return (
                <div>
                    <h1 className="text-2xl font-medium hover:opacity-100 opacity-75 cursor-pointer">
                        {day.day}
                    </h1>
                </div>
            );
        });
    }

    function Topbar_Buttons() {
        return (
            <div className="flex gap-3">
                <button
                    className="p-2.5 rounded-full hover:opacity-70 transition-all bg-darkprimary/80"
                    onClick={() =>
                        navigate(RoutePath.Settings, { replace: true })
                    }
                >
                    <img src={settings} />
                </button>
                <button className="p-2.5 rounded-full hover:opacity-70 transition-all bg-darkprimary/80">
                    <img src={help} />
                </button>
            </div>
        );
    }

    return (
        <div className="relative rounded-full bg-primary flex items-center p-0 pl-5 pr-5 justify-between">
            <div className="">
                <Search1 />
            </div>
            <div className="h-16 pt-2 pb-2 flex gap-16 items-center">
                <Days />
                <div>
                    <Button2 text="Today" />
                </div>
            </div>
            <div>
                <Topbar_Buttons />
            </div>
        </div>
    );
}
