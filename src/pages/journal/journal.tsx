import { useEffect, useState } from "react";
import Input2 from "../../components/inputs/input2";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../constants/path";
import Button2 from "../../components/inputs/button2";
import Search1 from "../../components/inputs/search1";
import settings from "../../assets/settings.svg";
import help from "../../assets/help.svg";
import { useQuery } from "@tanstack/react-query";
import { getDays } from "../../api/api";

export default function JournalPage() {
    const { data } = useQuery({
        queryKey: ["days"],
        queryFn: getDays,
    });

    const navigate = useNavigate();

    const currentTime = new Date();
    const todaysMonth = currentTime.getMonth() + 1;
    const today = currentTime.getDate();

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

    function Days() {
        if (data && data.days) {
            return data.days.slice(-10).map((day: any) => {
                return (
                    <div
                        onClick={() => {
                            setCurrentDay(day);
                        }}
                    >
                        <h1 className="text-2xl font-medium hover:opacity-100 opacity-75 cursor-pointer">
                            {day.day}
                        </h1>
                    </div>
                );
            });
        }
    }

    interface IDay {
        day: number;
        month: number;
        date: string;
        equity: number;
        totalProfit: number;
        journaldata: {
            title: string;
            journal: string;
        };
        trades: Array<{
            entry: number;
            stop: number;
            take: number;
            riskReward: number;
            profit: number;
            equity: number;
            time: string;
            pair: string;
            notes: string;
        }>;
    }

    const [currentday, setCurrentDay] = useState<IDay | undefined>();

    const [title, setTitle] = useState<string>("Untitled Document");
    const [journal, setJournal] = useState<string>("");

    useEffect(() => {
        if (currentday) {
            setTitle(currentday.journaldata.title);
            setJournal(currentday.journaldata.journal);
        }
    }, [currentday]);

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
                            <h1 className="text-4xl">Aug, 6th</h1>
                        </div>
                        <hr></hr>
                        <div className="w-full h-1/2 flex justify-end gap-5 items-center">
                            <div className="h-12 w-24 mt-4">
                                <Button2 text="Save" />
                            </div>
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
