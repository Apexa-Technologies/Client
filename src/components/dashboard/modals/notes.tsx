import { useState } from "react";
import close from "../../../assets/close.svg";
import Input1 from "../../inputs/input1";
import TextBox1 from "../../inputs/textbox1";
import Button1 from "../../inputs/button1";
import { Query, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { postQuickNotes } from "../../../api/api";

export default function NewNotesModal(props: any) {
    const queryClient = useQueryClient();
    const [subject, setSubject] = useState("");
    const [tags, setTags] = useState("");
    const [note, setNote] = useState("");

    const mutation = useMutation({
        mutationKey: ["Notes"],
        mutationFn: postQuickNotes,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["Notes"] });
            toast.success("Added New Note!");
            props.close();
        },
    });

    function handleSubmit() {
        try {
            mutation.mutate({
                subject: subject,
                note: note,
            });
            props.close();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="bg-[#000]/30 top-0 left-0 z-30 flex items-center justify-center fixed h-screen w-screen backdrop-blur">
            <div className="bg-primary flex flex-col rounded-[2rem] w-2/6 h-2/3 p-6">
                <div className="w-full flex justify-between items-center mb-4">
                    <h1 className="text-3xl">New Note</h1>
                    <div onClick={props.close}>
                        <img
                            src={close}
                            className="h-6 hover:cursor-pointer hover:opacity-60"
                        />
                    </div>
                </div>
                <hr></hr>
                <div className="h-full grow mt-5 relative">
                    <div className="flex flex-col mb-3">
                        <p className="text-2xl mb-2">Subject</p>
                        <Input1
                            id="newNoteSubject"
                            type="text"
                            input=""
                            value={subject}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setSubject(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col mb-3">
                        <p className="text-2xl mb-2">Tags</p>
                        <Input1
                            id="newNoteSubject"
                            type="text"
                            input=""
                            value={tags}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setTags(e.target.value)}
                        />
                    </div>
                    <hr className="mb-5 mt-5 opacity-50"></hr>
                    <div className="flex flex-col mb-3 h-56">
                        <p className="text-2xl mb-2">Note</p>
                        <TextBox1
                            rows={2}
                            input=""
                            id="quicknoteInput"
                            value={note}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setNote(e.target.value)}
                        />
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-10">
                        <Button1 onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
    );
}
