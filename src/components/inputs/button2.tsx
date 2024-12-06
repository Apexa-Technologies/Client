export default function Button2(props: any) {
    return (
        <button
            onClick={props.onClick}
            className="rounded-full bg-secondary w-full h-full hover:opacity-60 hover:translate-y-0.5 transition-all"
        >
            <h1>{props.text}</h1>
        </button>
    );
}
