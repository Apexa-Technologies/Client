import search from "../../assets/search.svg";

export default function Search1() {
    return (
        <div className="bg-darkprimary items-center justify-between rounded-full pl-4 pr-4 pt-2 pb-2 flex gap-5">
            <img src={search} className="h-4 w-4" />
            <input
                className="bg-transparent outline-none w-32"
                type="text"
                placeholder="Search"
            />
        </div>
    );
}
