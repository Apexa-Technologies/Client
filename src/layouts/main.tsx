import page from "./main.module.scss";
import Sidebar from "../components/sidebar/sidebar";
import Topbar from "../components/topbar/topbar";

export default function Layout(props: any) {
    return (
        <div className={page.page}>
            <Sidebar />
            <div className={page.Right}>
                <Topbar />
                <div className={page.Content}>{props.children}</div>
            </div>
        </div>
    );
}
