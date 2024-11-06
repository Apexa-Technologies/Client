import { useState } from "react";
import Button2 from "../../components/inputs/button2";
import Input2 from "../../components/inputs/input2";

export default function JournalPage() {
    const [title, setTitle] = useState("Untitled Document");
    const date = "Aug, 6th";
    return (
        <div className="min-h-full h-fit flex flex-wrap gap-5 overflow-y-hidden">
            <section className="w-3/4 flex flex-col gap-5">
                <div className="h-fit bg-primary rounded-[2rem] flex flex-col p-5 pl-8 pr-8">
                    <div className="w-full flex h-1/2 justify-between items-center pt-10 pb-14">
                        <div className="w-fit">
                            <Input2
                                value={title}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setTitle(e.target.value)}
                            />
                        </div>
                        <h1 className="text-4xl">{date}</h1>
                    </div>
                    <hr></hr>
                    <div className="w-full h-1/2 flex justify-end items-center">
                        <div className="h-12 w-36 mt-4">
                            <Button2 text="New Trade" />
                        </div>
                    </div>
                </div>
                <div className="grow-[3] bg-primary rounded-[2rem]"></div>
            </section>
            <section className="grow flex flex-col gap-5 h-fit">
                <div className="grow bg-primary rounded-[2rem] h-[30em] min-h-fit"></div>
                <div className="grow bg-primary rounded-[2rem] h-[30em] min-h-fit"></div>
            </section>
        </div>
    );
}
