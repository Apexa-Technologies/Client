import Button2 from "../../../inputs/button2";
import Dots from "../../../inputs/dots";

export default function Notes() {
    return (
        <>
            <div className="w-full h-full flex flex-col p-5">
                <div className="w-full mb-5 flex gap-2 justify-between items-center pl-2 pr-2">
                    <h1 className="text-4xl">Quick Notes</h1>
                    <div className="w-36 h-full">
                        <Button2 text="New Note" />
                    </div>
                    <Dots />
                </div>
                <div className="grid grid-cols-2 grid-rows-2  gap-4">
                    <div className="rounded-3xl bg-darkprimary h-40"></div>
                    <div className="rounded-3xl bg-darkprimary h-40"></div>
                    <div className="rounded-3xl bg-darkprimary h-40"></div>
                    <div className="rounded-3xl bg-darkprimary h-40"></div>
                </div>
            </div>
        </>
    );
}
