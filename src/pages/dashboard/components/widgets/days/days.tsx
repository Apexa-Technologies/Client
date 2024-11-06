import { useQuery } from "@tanstack/react-query";
import { getLast5Days } from "../../../../../api/api";
import { useState } from "react";
import DayModal from "../../modals/day";
import Dots from "../../../../../components/inputs/dots";

export default function Days() {
    const [isModalOpen, setModal] = useState(false);
    const [selectedDay, setDay] = useState(null);

    const { isPending, error, data, isFetching }: any = useQuery({
        queryKey: ["5Days"],
        queryFn: getLast5Days,
    });

    function formatDate(n: any) {
        const date = new Date(n);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${month}/${day}`;
    }

    function openModal(day: any) {
        setDay(day);
        setModal(true);
    }

    function displayDays() {
        if (data.days && data.days.length > 0) {
            return data.days
                .slice(-5)
                .reverse()
                .map((day: any) => {
                    return (
                        <div
                            key={day._id}
                            onClick={() => openModal(day)}
                            className={`w-full h-16 flex justify-between relative items-center bg-gradient-to-r rounded-3xl hover:translate-y-0.5 p-5 hover:opacity-60 cursor-pointer transition-all ${
                                day.profit > 0
                                    ? "from-bullish2 to-bullish1"
                                    : "from-bearish1 to-bearish2"
                            }`}
                        >
                            <div className="flex items-end gap-1">
                                <h1 className="text-3xl">
                                    {formatDate(day.date)}
                                </h1>
                                <h3 className="text-xl">{day.weekday}</h3>
                            </div>
                            <p className="text-2xl absolute left-1/2 transform -translate-x-1/2 hover:underline">
                                View
                            </p>
                            <div
                                className={`pl-2 pr-2 rounded-3xl w-16 flex items-center justify-center h-11 ${
                                    day.profit > 0
                                        ? "bg-darkbullish/50"
                                        : "bg-darkbearish/50"
                                }`}
                            >
                                <h1 className="text-lg">3.2{day.profit}%</h1>
                            </div>
                        </div>
                    );
                });
        } else {
            return (
                <div className="flex justify-center mt-5 mb-5">
                    <h1 className="text-3xl opacity-80">No Days Yet!</h1>
                </div>
            );
        }
    }

    if (error) {
        return (
            <div className="w-full flex flex-col p-5">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl">Recent Days</h1>
                    <Dots />
                </div>
                <div className="flex flex-col gap-3 mt-3 overflow-hidden mb-3">
                    <h1 className="text-3xl opacity-80">Error</h1>
                </div>
            </div>
        );
    }

    if (isFetching || isPending) {
        return (
            <div className="w-full flex flex-col p-5">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl">Recent Days</h1>
                    <Dots />
                </div>
                <div className="flex flex-col gap-3 mt-3 overflow-hidden mb-3">
                    <h1 className="text-3xl opacity-80">Loading</h1>
                </div>
            </div>
        );
    }

    if (data) {
        return (
            <>
                <div className="w-full flex flex-col p-5">
                    <div className="flex justify-between items-center">
                        <h1 className="text-4xl">Recent Days</h1>
                        <Dots />
                    </div>
                    <div className="flex flex-col gap-3 mt-3 overflow-hidden mb-3">
                        {displayDays()}
                    </div>
                </div>
                {isModalOpen && (
                    <DayModal
                        close={() => {
                            setModal(false);
                        }}
                        day={selectedDay}
                    />
                )}
            </>
        );
    }
}
