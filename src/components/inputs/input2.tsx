import { useState } from "react";
import edit from "../../assets/edit.svg";

export default function Input2(props: any) {
    return (
        <div className="flex gap-4">
            <div className="relative min-w-[1em] w-min">
                <span className="invisible whitespace-pre text-4xl">
                    {props.value}
                </span>
                <input
                    className="absolute left-0 w-full bg-transparent text-4xl outline-none"
                    onChange={props.onChange}
                    value={props.value}
                ></input>
            </div>
            <img src={edit} />
        </div>
    );
}
