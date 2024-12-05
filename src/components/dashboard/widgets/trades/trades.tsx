import { useState } from "react";
import NewTradePanel from "../../modals/newTrade";
import { getTrades } from "../../../../api/api";
import { useQuery } from "@tanstack/react-query";
import TradeModal from "../../modals/trade";

export default function Trades() {
    const [selectedTrade, setTrade] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTradeOpen, setIsTradeOpen] = useState(false);

    const { isPending, error, data, isFetching } = useQuery({
        queryKey: ["Trades"],
        queryFn: () => getTrades(),
    });

    function openModal(trade: any) {
        setTrade(trade);
        setIsTradeOpen(true);
    }

    function displayTrades() {
        if (data?.trades && data?.trades.length > 0) {
            return data.trades
                .slice(-5)
                .reverse()
                .map((trade: any) => {
                    return (
                        <div
                            key={trade._id}
                            onClick={() => openModal(trade)}
                            className={`w-full bg-gradient-to-r relative h-16 rounded-full flex justify-between items-center p-5 transition-all hover:translate-y-0.5 hover:opacity-60 cursor-pointer ${
                                trade.profit > 0
                                    ? "from-cyan60 to-green60"
                                    : "from-red60 to-pink60"
                            }`}
                        >
                            <p className="text-3xl">{trade.pair}</p>
                            <p className="text-2xl absolute left-1/2 transform -translate-x-1/2 hover:underline">
                                View
                            </p>
                            <p
                                className={`font-medium text-4xl ${
                                    trade.profit > 0
                                        ? "text-green-2"
                                        : "text-pink-2"
                                }`}
                            >
                                ${trade.profit.toLocaleString()}
                            </p>
                        </div>
                    );
                });
        } else {
            return (
                <div className="flex justify-center mt-5 mb-5">
                    <h1 className="text-3xl opacity-80">No Trades Yet!</h1>
                </div>
            );
        }
    }

    if (error) {
        return (
            <div className="w-full flex flex-col p-5">
                <h1 className="text-4xl">Recent Trades</h1>
                <div className="flex flex-col gap-3 mt-3 overflow-hidden mb-3">
                    <h1 className="text-3xl opacity-80">Error</h1>
                </div>
            </div>
        );
    }

    if (isFetching || isPending) {
        return (
            <div className="w-full flex flex-col p-5">
                <h1 className="text-4xl">Recent Trades</h1>
                <div className="flex flex-col gap-3 mt-3 overflow-hidden mb-3">
                    <h1 className="text-3xl opacity-80">Loading</h1>
                </div>
            </div>
        );
    }

    if (data) {
        return (
            <div className="w-full flex flex-col p-5 h-full">
                <h1 className="text-4xl">Recent Trades</h1>
                <div className="flex flex-col h-full grow justify-between">
                    <div className="flex flex-col gap-3 mt-3 overflow-hidden mb-3">
                        {displayTrades()}
                    </div>
                    <div
                        onClick={() => setIsModalOpen(true)}
                        className="w-full bg-purple2 h-16 rounded-full flex justify-center items-center p-5 transition-all hover:translate-y-1 hover:opacity-60 cursor-pointer"
                    >
                        <p className="text-2xl">Add New Trade</p>
                    </div>
                </div>

                {isModalOpen && (
                    <NewTradePanel close={() => setIsModalOpen(false)} />
                )}
                {isTradeOpen && (
                    <TradeModal
                        close={() => {
                            setIsTradeOpen(false);
                        }}
                        trade={selectedTrade}
                    />
                )}
            </div>
        );
    }
}
