import { Route, Routes } from "react-router-dom";
import { RoutePath } from "../constants/path";
import DashboardPage from "../pages/dashboard/Dashboard";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path={RoutePath.Dashboard} element={<DashboardPage />} />
            <Route path={RoutePath.Journal} element={<></>} />
            <Route path={RoutePath.News} element={<></>} />
            <Route path={RoutePath.Calculator} element={<></>} />
        </Routes>
    );
}
