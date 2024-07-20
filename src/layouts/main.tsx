import page from "./main.module.scss";
import profile from "../assets/profile.webp";
import flag from "../assets/flag.svg";

export default function Layout(props: any) {
    return (
        <div className={page.page}>
            <Sidebar />
            <div className={page.Right}>
                <div className={page.Topbar_Wrapper}></div>
                <div className={page.Content}>{props.children}</div>
            </div>
        </div>
    );
}

function Sidebar() {
    return (
        <div className={page.Sidebar_Wrapper}>
            <img src={profile} className={page.Profile_Picture} />
            <div className={page.navigation}>
                <ul>
                    <li>
                        <img src="" />
                    </li>
                    <li>
                        <img src="" />
                    </li>
                    <li>
                        <img src="" />
                    </li>
                    <li>
                        <img src="" />
                    </li>
                    <li>
                        <img src="" />
                    </li>
                    <li>
                        <img src="" />
                    </li>
                </ul>
            </div>
            <img src={flag} className={page.Flag} />
        </div>
    );
}
