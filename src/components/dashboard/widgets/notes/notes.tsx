import Button2 from "../../../inputs/button2";
import Dots from "../../../inputs/dots";

export default function Notes() {
    const data: any = [];

    function Notes() {
        if (data.length <= 0) {
            return (
                <div className="grid justify-center align-middle pt-10 pb-10">
                    <h1 className="text-3xl opacity-80">No Notes Yet</h1>
                </div>
            );
        }
        if (data.length >= 0) {
            return <div className="grid grid-cols-2 grid-rows-2 gap-4"></div>;
        }
    }

    return (
        <>
            <div className="w-full h-full flex flex-col p-5">
                <div className="w-full mb-5 flex gap-2 justify-between items-center pl-2 pr-2">
                    <h1 className="text-4xl">Quick Notes</h1>
                    <div className="w-36 h-10">
                        <Button2 text="New Note" />
                    </div>
                    <Dots />
                </div>
                <div>
                    <Notes />
                </div>
            </div>
        </>
    );
}
