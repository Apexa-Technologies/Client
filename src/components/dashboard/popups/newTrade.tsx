import close from '../../../assets/close.svg';

export default function NewTradePanel(props: any){
    return(
        <div className="fixed bg-black w-screen h-screen top-0 left-0 z-20 backdrop-blur flex items-center justify-center">
            <div className="bg-purple rounded-3xl w-2/6 h-3/4 flex flex-col p-6">
                <div className="w-full flex flex-row-reverse">
                    <div onClick={props.close}>
                        <img src={close} className="h-6 hover:cursor-pointer hover:opacity-60"/>
                    </div>
                </div>
            </div>
        </div>
    )
}