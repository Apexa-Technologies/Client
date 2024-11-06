import profile from "../../assets/profile.webp";
import flag from "../../assets/flag.svg";
import home from "../../assets/home.svg";
import calender from "../../assets/calender.svg";
import caculator from "../../assets/calulator.svg";
import news from "../../assets/news.svg";
import journal from "../../assets/journal.svg";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="w-16 mb-10 rounded-full bg-primary flex flex-col items-center p-3 justify-between">
            <img src={profile} className="rounded-full" />
            <div>
                <ul className="flex flex-col items-center gap-12">
                    <Sidebar_Button ButtonPath="/news" ButtonImage={news} />
                    <Sidebar_Button
                        ButtonPath="/calender"
                        ButtonImage={calender}
                    />
                    <Sidebar_Button
                        ButtonPath="/dashboard"
                        ButtonImage={home}
                    />
                    <Sidebar_Button
                        ButtonPath="/calculator"
                        ButtonImage={caculator}
                    />
                    <Sidebar_Button
                        ButtonPath="/journal"
                        ButtonImage={journal}
                    />
                </ul>
            </div>
            <img src={flag} className="mb-2" />
        </div>
    );
}

interface Props {
    ButtonPath: any;
    ButtonImage: any;
}

function Sidebar_Button(props: Props) {
    const location = useLocation();
    const navigate = useNavigate();

    function handleClick() {
        console.log(props.ButtonPath);
        navigate(props.ButtonPath, { replace: true });
    }
    return (
        <li
            className={`cursor-pointer hover:translate-y-1 transition-all ${
                location.pathname == props.ButtonPath
                    ? "opacity-100"
                    : "opacity-60 hover:opacity-100"
            }`}
            onClick={handleClick}
        >
            <img src={props.ButtonImage} />
        </li>
    );
}
