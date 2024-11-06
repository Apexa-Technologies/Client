import { useQuery } from "@tanstack/react-query";
import Button2 from "../../../../components/inputs/button2";
import Dots from "../../../../components/inputs/dots";
import { getQuickNotes } from "../../../../api/api";
import { useState } from "react";
import NewNotesModal from "../../modals/notes";
import * as userTypes from "../../../../types/user";
import { AnimatePresence } from "framer-motion";

export default function Notes() {
    const [modalOpened, setModalOpen] = useState(false);

    interface NotesQueryResults {
        isPending: boolean;
        error: any;
        data: userTypes.notes | undefined;
        isFetching: boolean;
    }

    const { isPending, error, data, isFetching }: NotesQueryResults = useQuery<
        userTypes.notes,
        Error
    >({
        queryKey: ["Notes"],
        queryFn: getQuickNotes,
    });

    const DisplayNotes = () => {
        if (data && data.notes)
            return data.notes
                .slice(-6)
                .reverse()
                .map((note: userTypes.note) => (
                    <div
                        key={note._id}
                        className="bg-darkprimary flex flex-col rounded-[2rem] h-44 p-5"
                    >
                        <h3 className="opacity-70">{note.subject}</h3>
                        <p className="text-2xl text-wrap w-full">{note.note}</p>
                    </div>
                ));
    };

    const Filler = () => {
        if (data && data.notes) {
            const fillerCount = Math.max(0, 6 - data?.notes.length);
            return Array.from({ length: fillerCount }).map((_, index) => (
                <div
                    key={index}
                    className="bg-darkprimary/60 rounded-[2rem] p-5 h-44"
                ></div>
            ));
        }
    };

    const NotesContent = () =>
        data && data.notes && data.notes.length <= 0 ? (
            <div className="grid justify-center align-middle pt-10 pb-10">
                <h1 className="text-3xl opacity-80">No Notes Yet</h1>
            </div>
        ) : (
            <div className="grid grid-cols-2 gap-4 h-full w-full overflow-y-hidden">
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
            <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => null}
            >
                {modalOpened && (
                    <NewNotesModal close={() => setModalOpen(false)} />
                )}
            </AnimatePresence>
        </>
    );
}
function useContainerDimensions(componentRef: any): {
    width: any;
    height: any;
} {
    throw new Error("Function not implemented.");
}
