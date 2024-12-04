import Dots from "../../../inputs/dots";
import Bubble from "../../../small/bubble";

export default function CurrentDay() {
    return (
        <>
            <div className="w-full h-fit flex flex-col p-5">
                <div className="w-full flex justify-between items-center">
                    <h1 className="text-4xl">Current Day</h1>
                    <Dots />
                </div>
                <div className=" min-h-32 items-center justify-center flex">
                    <h1 className="text-2xl">No Open Trades to Display</h1>
                </div>
                <hr className="opacity-70" />
                <div className="flex mt-5 pl-3 pr-3 items-center justify-between">
                    <h1 className="text-2xl">Total Day Profit</h1>
                    <Bubble value={1.2} />
                </div>
            </div>
        </>
    );
}
