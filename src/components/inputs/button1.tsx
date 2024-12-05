import arrow from "../../assets/arrow.svg";

export default function Button1(props: any) {
    return (
        <button
            onClick={props.onClick}
            className="rounded-full border border-white h-12 w-12 flex items-center justify-center p-2 hover:bg-pink hover:border-0 transition"
        >
            <img src={arrow} />
        </button>
    );
}
