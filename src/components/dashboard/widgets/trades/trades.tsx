export default function Trades() {
    const trades = [
        {
            id: 1,
            Direction: "long",
            Profit: "1493",
            Pair: "XAUUSD",
        },
        {
            id: 2,
            Direction: "short",
            Profit: "-232",
            Pair: "EURUSD",
        },
        {
            id: 3,
            Direction: "long",
            Profit: "-359",
            Pair: "XAUUSD",
        },
        {
            id: 4,
            Direction: "long",
            Profit: "1350",
            Pair: "XAUUSD",
        },
        {
            id: 5,
            Direction: "long",
            Profit: "1904",
            Pair: "XAUUSD",
        },
        {
            id: 6,
            Direction: "long",
            Profit: "-359",
            Pair: "XAUUSD",
        },
    ];
    return (
        <div className="w-full flex flex-col p-5">
            <h1 className="text-4xl">Recent Trades</h1>
            <div className="flex flex-col gap-3 mt-5 overflow-y-auto mb-3">
                {trades.map((trade) => {
                    const NewProfit = parseInt(trade.Profit);
                    console.log(trade);
                    return (
                        <div
                            className={`w-full bg-gradient-to-r h-16 rounded-full flex justify-between items-center p-5 transition-all hover:translate-y-0.5 hover:opacity-60 cursor-pointer ${
                                NewProfit > 0
                                    ? "from-cyan60 to-green60"
                                    : "from-red60 to-pink60"
                            }`}
                        >
                            <p className="text-3xl">{trade.Pair}</p>
                            <p className="text-2xl relative left--1/2 translate-x--1/2 hover:underline">
                                View
                            </p>
                            <p
                                className={`font-medium text-4xl ${
                                    NewProfit > 0 ? "text-green2" : "text-pink2"
                                }`}
                            >
                                ${NewProfit.toLocaleString()}
                            </p>
                        </div>
                    );
                })}
            </div>
            <div className="w-full bg-grey h-16 rounded-full flex justify-center items-center p-5 transition-all hover:translate-y-1 hover:opacity-60 cursor-pointer">
                <p className="text-2xl">Add New Trade</p>
            </div>
        </div>
    );
}
