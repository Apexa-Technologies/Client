import { useEffect, useState } from "react";
import NewTradePanel from "../../popups/newTrade";
import axios from "axios";

export default function Trades() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState<any>(null); // Store fetched data here

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/trades", {
                    headers: {
                        Authorization: localStorage.getItem("AUTH") || "",
                    },
                });

                if (response.status === 200) {
                    setData(response.data.trades);
                } else if (response.status === 403) {
                    console.log("Forbidden");
                } else {
                    console.log("No Response from server or No Data");
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    function displayTrades() {
        if (data && data.length > 0) {
            return data.map((trade: any) => (
                <div
                    className={`w-full bg-gradient-to-r h-16 rounded-full flex justify-between items-center p-5 transition-all hover:translate-y-0.5 hover:opacity-60 cursor-pointer ${
                        trade.Profit > 0
                            ? "from-cyan-60 to-green-60"
                            : "from-red-60 to-pink-60"
                    }`}
                >
                    <p className="text-3xl">{trade.Pair}</p>
                    <p className="text-2xl relative left--1/2 translate-x--1/2 hover:underline">
                        View
                    </p>
                    <p
                        className={`font-medium text-4xl ${
                            trade.Profit > 0 ? "text-green-2" : "text-pink-2"
                        }`}
                    >
                        ${trade.Profit.toLocaleString()}
                    </p>
                </div>
            ));
        } else {
            return (
                <div className="flex justify-center mt-5 mb-5">
                    <h1 className="text-3xl opacity-80">No Trades Yet!</h1>
                </div>
            );
        }
    }

    return (
        <div className="w-full flex flex-col p-5">
            <h1 className="text-4xl">Recent Trades</h1>
            <div className="flex flex-col gap-3 mt-3 overflow-y-auto mb-3">
                {displayTrades()}
            </div>
            <div
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-grey h-16 rounded-full flex justify-center items-center p-5 transition-all hover:translate-y-1 hover:opacity-60 cursor-pointer"
            >
                <p className="text-2xl">Add New Trade</p>
            </div>

            {isModalOpen && (
                <NewTradePanel close={() => setIsModalOpen(false)} />
            )}
        </div>
    );
}
