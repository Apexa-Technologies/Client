import close from "../../../assets/close.svg";

export default function TradeModal(props: any) {
    return (
        <div className="bg-grey top-0 left-0 z-30 flex items-center justify-center fixed h-screen w-screen backdrop-blur">
            <div className="rounded-3xl bg-purple min-h-32 w-4/6 flex flex-col p-4">
                <div className="text-3xl flex justify-between">
                    <h1>Trade</h1>
                    <div onClick={props.close}>
                        <img
                            src={close}
                            className="h-6 hover:cursor-pointer hover:opacity-60"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
