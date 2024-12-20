interface Value {
    value: number;
}

export default function Bubble(props: Value) {
    let Positive;

    if (props.value > 0) {
        Positive = true;
    } else {
        Positive = false;
    }

    return (
        <div
            className={`flex p-0 rounded-full items-baseline h-fit ${
                Positive ? "bg-bullish2" : "bg-bearish2"
            }`}
        >
            <p className="m-0 ml-2.5 mr-2.5 self-center text-lg">
                {props.value}%
            </p>
        </div>
    );
}
