import { useEffect, useState } from "react";
import Input2 from "../../components/inputs/input2";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../constants/path";
import Button2 from "../../components/inputs/button2";
import Search1 from "../../components/inputs/search1";
import settings from "../../assets/settings.svg";
import help from "../../assets/help.svg";

export default function JournalPage() {
    const data = [
        {
            day: 15,
            month: 11,
            data: {
                title: "Untitled Document",
            },
        },
        {
            day: 16,
            month: 11,
            data: {
                title: "Untitled Document",
            },
        },
        {
            day: 17,
            month: 11,
            data: {
                title: "Untitled Document",
            },
        },
        {
            day: 18,
            month: 11,
            data: {
                title: "Untitled Document",
            },
        },
        {
            day: 19,
            month: 11,
            data: {
                title: "Untitled Document",
            },
        },
        {
            day: 20,
            month: 11,
            data: {
                title: "Untitled Document",
            },
        },
        {
            day: 21,
            month: 11,
            data: {
                title: "Untitled Document",
            },
        },
        {
            day: 22,
            month: 11,
            data: {
                title: "Untitled Document",
            },
        },
        {
            day: 23,
            month: 11,
            data: {
                title: "Untitled Document",
            },
        },
        {
            day: 24,
            month: 11,
            data: {
                title: "Monday NY Bull Open",
                journal: "test test test test",
                trades: [
                    {
                        entry: 123,
                        stop: 123,
                        take: 123,
                        riskReward: 0,
                        profit: 250,
                        equity: 10250,
                        time: "Wed Nov 06 2024 02:18:07 GMT-0800 (Pacific Standard Time)",
                        pair: "XAUUSD",
                        notes: "",
                        _id: "672b425fdb30f17c1a703bef",
                    },
                    {
                        entry: 123,
                        stop: 123,
                        take: 123,
                        riskReward: 0,
                        profit: 500,
                        equity: 10750,
                        time: "Wed Nov 06 2024 02:18:12 GMT-0800 (Pacific Standard Time)",
                        pair: "XAUUSD",
                        notes: "",
                        _id: "672b4264db30f17c1a703c0a",
                    },

                    {
                        entry: 324,
                        stop: 234,
                        take: 234,
                        riskReward: 0,
                        profit: 234,
                        equity: 10984,
                        time: "Wed Nov 06 2024 23:00:20 GMT-0800 (Pacific Standard Time)",
                        pair: "XAUUSD",
                        notes: "",
                        _id: "672c6584483d14946fe43e5b",
                    },
                ],
            },
        },
        {
            day: 25,
            month: 11,
            data: {
                title: "Untitled Document",
            },
        },
    ];

    const navigate = useNavigate();

    const currentTime = new Date();
    const todaysMonth = currentTime.getMonth() + 1;
    const today = currentTime.getDate();

    const [title, setTitle] = useState("");

    const [currentday, setCurrentDay] = useState({
        title: "Untitled Document",
        date: "",
    });

    useEffect(() => {
        setTitle(currentday.title);
    }, [currentday]);

    function Days() {
        return data.slice(-10).map((day: any) => {
            return (
                <div
                    onClick={() => {
                        setCurrentDay({
                            title: day.data.title || "Untitled Document",
                            date: "test",
                        });
                    }}
                >
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
        <div className="flex pb-10 gap-4 h-screen flex-col overflow-y-scroll">
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
            <div className="min-h-full h-fit flex flex-wrap gap-5 overflow-y-hidden">
                <section className="w-4/6 flex flex-col gap-5">
                    <div className="h-fit bg-primary rounded-[2rem] flex flex-col p-5 pl-8 pr-8">
                        <div className="w-full flex h-1/2 justify-between items-center pt-10 pb-14">
                            <div className="w-fit">
                                <Input2
                                    value={title}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => setTitle(e.target.value)}
                                />
                            </div>
                            <h1 className="text-4xl">{currentday.date}</h1>
                        </div>
                        <hr></hr>
                        <div className="w-full h-1/2 flex justify-end items-center">
                            <div className="h-12 w-36 mt-4">
                                <Button2 text="New Trade" />
                            </div>
                        </div>
                    </div>
                    <div className="grow-[3] bg-primary rounded-[2rem]"></div>
                </section>
                <section className="grow flex flex-col gap-5 h-fit">
                    <div className="grow bg-primary rounded-[2rem] h-[30em] min-h-fit"></div>
                    <div className="grow bg-primary rounded-[2rem] h-[30em] min-h-fit"></div>
                </section>
            </div>
        </div>
    );
}
