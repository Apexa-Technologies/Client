import profile from "../../assets/profile.webp";
import flag from "../../assets/flag.svg";
import home from "../../assets/home.svg";
import calender from "../../assets/calender.svg";
import caculator from "../../assets/calulator.svg";
import news from "../../assets/news.svg";
import journal from "../../assets/journal.svg";
import page from "./sidebar.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className={page.Sidebar_Wrapper}>
            <img src={profile} className={page.Profile_Picture} />
            <div className={page.navigation}>
                <ul>
                    <Sidebar_Button ButtonPath="/news" ButtonImage={news} />
                    <Sidebar_Button
                        ButtonPath="/calender"
                        ButtonImage={calender}
                    />
                    <Sidebar_Button ButtonPath="/" ButtonImage={home} />
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
            <img src={flag} className={page.Flag} />
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
            className={`${page.Sidebar_Button} ${
                location.pathname == props.ButtonPath
                    ? page.active
                    : page.inactive
            }`}
            onClick={handleClick}
        >
            <img src={props.ButtonImage} />
        </li>
    );
}
