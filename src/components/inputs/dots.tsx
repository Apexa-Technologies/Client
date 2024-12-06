import dots from "../../assets/dots.svg";

export default function Dots() {
    return (
        <button className="h-fit w-fit hover:opacity-60 hover:translate-y-0.5 transition-all">
            <img src={dots} />
        </button>
    );
}
