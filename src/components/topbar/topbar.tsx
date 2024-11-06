import { useLocation } from "react-router-dom";
import { RoutePath } from "../../constants/path";
import DashboardTopbar from "./dashboard/dashboard";
import JournalPageTopBar from "./journal/journal";

export default function Topbar() {
    const location = useLocation();

    console.log(location.pathname);

    let switcher;
    switch (location.pathname) {
        case "/" + RoutePath.Dashboard:
            switcher = <DashboardTopbar />;
            break;

        case "/" + RoutePath.Journal:
            switcher = <JournalPageTopBar />; // Add any component here if needed for the Journal route
            break;

        default:
            switcher = <DashboardTopbar />;
            break;
    }

    return <>{switcher}</>;
}
