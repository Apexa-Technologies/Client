import { useEffect, useRef, useState } from "react";
import edit from "../../assets/edit.svg";

interface Input2Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input2({ value, onChange }: Input2Props) {
    const [text, setText] = useState("");
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        setText(value);
    }, [value]);

    return (
        <div className="flex gap-4">
            <div className="relative min-w-[1em] w-min">
                <span
                    ref={spanRef}
                    className="invisible whitespace-pre text-4xl"
                >
                    {text}
                </span>
                <input
                    className="absolute left-0 w-full bg-transparent text-4xl outline-none"
                    onChange={(e) => {
                        setText(e.target.value);
                        onChange(e);
                    }}
                    value={value}
                />
            </div>
            <img src={edit} alt="Edit" />
        </div>
    );
}
