import { useState } from 'react';
import close from '../../../assets/close.svg';
import Input1 from '../../inputs/input1';
import TextBox1 from '../../inputs/textbox1';
import Button1 from '../../inputs/button1';

export default function NewTradePanel(props: any){
    const [entry, setEntry] = useState<number | null>(null);
    const [stop, setStop] = useState<number | null>(null);
    const [take, setTake] = useState<number | null>(null);
    const [note, setNote] = useState("");
    return(
        <div className="fixed bg-black w-screen h-screen top-0 left-0 z-20 backdrop-blur flex items-center justify-center">
            <div className="bg-purple rounded-3xl w-4/6 h-1/2 flex flex-col p-6 pb-16">
                <div className="w-full flex relative mb-14">
                    <h1 className='text-center text-4xl font-semibold'>Add New Trade</h1>
                    <div onClick={props.close} className='justify-self-end absolute right-0'>
                        <img src={close} className="h-6 hover:cursor-pointer hover:opacity-60"/>
                    </div>
                </div>
                <div className='flex flex-col items-center grow gap-8'>
                    <div className='flex w-full'>
                        <Input1
                            type="number" 
                            input="Entry Price"
                            id="Entry"
                            value={entry !== null ? entry : ''}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEntry(parseFloat(e.target.value))} />
                        <Input1
                            type="number" 
                            input="Stop Loss"
                            id="Stop"
                            value={stop !== null ? stop : ''}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStop(parseFloat(e.target.value))} />
                        <Input1
                            type="number" 
                            input="Take Profit"
                            id="Take"
                            value={take !== null ? take : ''}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTake(parseFloat(e.target.value))} />
                        <Input1
                            type="string" 
                            input="Instrument"
                            id="Take"
                            value={take !== null ? take : ''}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTake(parseFloat(e.target.value))} />
                    </div>
                    <div className='grow w-full flex items-center justify-center'>
                        <TextBox1 
                            type="string" 
                            input="Note"
                            id="Note"
                            value={note}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNote(e.target.value)}/>
                    </div>
                    <div className='relative top-4'>
                        <Button1 onClick={() => console.log("submit trade")}/>
                    </div>
                </div>
            </div>
        </div>
    )
}