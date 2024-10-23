import React from 'react'
import Input from './input1.module.scss'

interface Input1Props{
    rows: any;
    input: string,
    id: string,
    value: string | number,
    onChange: any,
}

const TextBox1 = React.memo((props: Input1Props) => {
    return(
        <div className="w-full h-full m-3 bg-darkpurple2 rounded-3xl flex p-4 focus-within:border-2 focus-within:border-pink60">
            <textarea
                placeholder={props.input}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                rows={props.rows}
                className={`w-full bg-transparent outline-none text-center resize-none ${Input.bruh}`}>
                </textarea>
        </div>
    );
});

export default TextBox1;