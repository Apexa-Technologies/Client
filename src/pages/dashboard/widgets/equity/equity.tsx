import EquityChart from "../../charts/EquityChart";
import Bubble from "../../../../components/small/bubble";

export default function Equity() {
    return (
        <div className="flex flex-col w-full h-full relative">
            <div className="ml-5 mt-4 z-10 absolute">
                <div className="flex items-baseline">
                    <p className="mb-0 opacity-75 ml-2 mr-3 text-[1.5rem]">
                        Total Equity
                    </p>
                    <Bubble value={5.2} />
                </div>
                <h1 className="relative p-0 top-[-1rem] text-[5rem]">
                    $100,000
                </h1>
            </div>
            <div className="w-full h-full">
                <EquityChart />
            </div>
        </div>
    );
}
