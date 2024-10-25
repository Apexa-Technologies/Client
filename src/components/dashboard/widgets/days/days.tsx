export default function Days() {
    const days = [
        {
            date: "7/5",
            weekday: "FRI",
            profit: 1.7,
        },
        {
            date: "7/4",
            weekday: "THU",
            profit: 0.3,
        },
        {
            date: "7/3",
            weekday: "WED",
            profit: 2.6,
        },
        {
            date: "7/2",
            weekday: "TUE",
            profit: -0.6,
        },
        {
            date: "7/1",
            weekday: "MON",
            profit: 1.2,
        },
    ];

    function displayDays() {
        if (days && days.length > 0) {
            return days.map((day: any) => {
                return (
                    <div
                        className={`w-full h-16 flex justify-between relative items-center bg-gradient-to-r rounded-3xl hover:translate-y-0.5 p-5 hover:opacity-60 cursor-pointer transition-all ${
                            day.profit > 0
                                ? "from-green3 to-cyan2"
                                : "from-red2 to-pink3"
                        }`}
                    >
                        <div className="flex items-end gap-1">
                            <h1 className="text-3xl">{day.date}</h1>
                            <h3 className="text-xl">{day.weekday}</h3>
                        </div>
                        <p className="text-2xl absolute left-1/2 transform -translate-x-1/2 hover:underline">
                            View
                        </p>
                        <div
                            className={` rounded-3xl w-16 flex items-center justify-center h-11 ${
                                day.profit > 0 ? "bg-darkgreen" : "bg-darkred"
                            }`}
                        >
                            <h1 className="text-lg">{day.profit}%</h1>
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

    return (
        <div className="w-full flex flex-col p-5">
            <h1 className="text-4xl">Recent Days</h1>
            <div className="flex flex-col gap-3 mt-3 overflow-hidden mb-3">
                {displayDays()}
            </div>
        </div>
    );
}
