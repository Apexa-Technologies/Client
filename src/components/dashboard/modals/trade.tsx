import close from "../../../assets/close.svg";
import TextBox1 from "../../inputs/textbox1";

export default function TradeModal(props: any) {
    return (
        <div className="bg-[#000]/30 top-0 left-0 z-30 flex items-center justify-center fixed h-screen w-screen backdrop-blur">
            <div className="rounded-3xl bg-primary min-h-24 w-5/12 flex flex-col p-5 pb-10">
                <div className="text-3xl flex justify-between">
                    <h1>TradeID: {props.trade._id}</h1>
                    <div onClick={props.close}>
                        <img
                            src={close}
                            className="h-6 hover:cursor-pointer hover:opacity-60"
                        />
                    </div>
                </div>
                <div className="flex flex-col mt-10">
                    <div className="flex w-full justify-between pl-16 pr-16 flex-wrap">
                        <div className="grow min-w-56 flex flex-col justify-center items-center mb-10">
                            <h3 className="opacity-50">Entry</h3>
                            <h1 className="text-4xl">
                                {props.trade?.entry.toLocaleString()}
                            </h1>
                        </div>
                        <div className="grow min-w-56 flex flex-col justify-center items-center mb-10">
                            <h3 className="opacity-50">Take Profit</h3>
                            <h1 className="text-4xl">
                                {props.trade?.take.toLocaleString()}
                            </h1>
                        </div>
                        <div className="grow min-w-56 flex flex-col justify-center items-center mb-10">
                            <h3 className="opacity-50">Stop Loss</h3>
                            <h1 className="text-4xl">
                                {props.trade?.stop.toLocaleString()}
                            </h1>
                        </div>
                        <div className="grow min-w-56 flex flex-col justify-center items-center mb-10">
                            <h3 className="opacity-50">Risk Reward</h3>
                            <h1 className="text-4xl">
                                {props.trade?.stop.toLocaleString()}
                            </h1>
                        </div>
                        <div className="grow min-w-56 flex flex-col justify-center items-center mb-10">
                            <h3 className="opacity-50">Grade</h3>
                            <h1 className="text-4xl">
                                {props.trade?.stop.toLocaleString()}
                            </h1>
                        </div>
                    </div>
                    <div className="mt-5 mb-5">
                        <h1 className="text-4xl mb-5">Notes</h1>
                        <div className="rounded-3xl bg-darkprimary w-full h-48 flex justify-center items-center p-10">
                            <p className="text-2xl">{props.trade?.notes}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
