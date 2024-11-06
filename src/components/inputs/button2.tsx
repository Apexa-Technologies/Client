export default function Button2(props: any) {
    return (
        <div className="pt-2 flex justify-center items-center pb-2 pl-4 pr-4 bg-secondary rounded-full h-fit">
            <button
                onClick={props.onClick}
                className="rounded-full hover:opacity-60 h-full hover:translate-y-0.5 transition-all"
            >
                <h1 className="text-center">{props.text}</h1>
            </button>
        </div>
    );
}
