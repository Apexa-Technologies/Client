import { useQuery } from "@tanstack/react-query";
import Button2 from "../../../inputs/button2";
import Dots from "../../../inputs/dots";
import { getQuickNotes } from "../../../../api/api";
import { useState, useEffect, useRef } from "react";
import NewNotesModal from "../../modals/notes";

export default function Notes() {
    const [modalOpened, setModalOpen] = useState(false);

    const { data = [] } = useQuery({
        queryKey: ["Notes"],
        queryFn: getQuickNotes,
    });

    const DisplayNotes = () =>
        data
            .slice(-4)
            .reverse()
            .map((note: any, index: any) => (
                <div
                    key={note.id}
                    className="bg-darkprimary flex flex-col rounded-[2rem] h-44 p-5"
                >
                    <h3 className="opacity-70">{note.subject}</h3>
                    <p className="text-2xl">{note.note}</p>
                </div>
            ));

    const Filler = () => {
        const fillerCount = Math.max(0, 4 - data.length);
        return Array.from({ length: fillerCount }).map((_, index) => (
            <div
                key={index}
                className="bg-darkprimary/60 rounded-[2rem] p-5"
            ></div>
        ));
    };

    const NotesContent = () =>
        data.length === 0 ? (
            <div className="grid justify-center align-middle pt-10 pb-10">
                <h1 className="text-3xl opacity-80">No Notes Yet</h1>
            </div>
        ) : (
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <DisplayNotes />
                <Filler />
            </div>
        );

    return (
        <>
            <div className="w-full h-full flex flex-col p-5">
                <div className="w-full mb-5 flex gap-2 justify-between items-center pl-2 pr-2">
                    <h1 className="text-4xl">Quick Notes</h1>
                    <div className="w-36 h-10">
                        <Button2
                            text="New Note"
                            onClick={() => setModalOpen(true)}
                        />
                    </div>
                    <Dots />
                </div>
                <NotesContent />
            </div>
            {modalOpened && <NewNotesModal close={() => setModalOpen(false)} />}
        </>
    );
}
