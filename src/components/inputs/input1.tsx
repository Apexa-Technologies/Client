import React from "react";
import Input from "./input1.module.scss";

interface Input1Props {
    type: string;
    input: string;
    id: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input1 = React.memo((props: Input1Props) => {
    return (
        <div className="w-full h-12 bg-darkprimary rounded-full flex pl-4 pr-4 focus-within:border-2 focus-within:border-secondary/60">
            <input
                type={props.type}
                placeholder={props.input}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                className={`w-full bg-transparent outline-none text-center ${Input.bruh}`}
            />
        </div>
    );
});

export default Input1;
