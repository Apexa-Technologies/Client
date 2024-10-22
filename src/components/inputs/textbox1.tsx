import React from 'react'
import Input from './input1.module.scss'

interface Input1Props{
    type: string,
    input: string,
    id: string,
    value: string | number,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const TextBox1 = React.memo((props: Input1Props) => {
    return(
        <div className="w-full h-full m-3 bg-darkpurple2 rounded-3xl flex pl-4 pr-4 focus-within:border-2 focus-within:border-pink60">
            <input 
                type={props.type} 
                placeholder={props.input}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                className={`w-full bg-transparent outline-none text-center ${Input.bruh}`}/>
        </div>
    );
});

export default TextBox1;