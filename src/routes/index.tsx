import { Route, Routes } from "react-router-dom";
import { RoutePath } from "../constants/path";
import DashboardPage from "../pages/dashboard/Dashboard";
import Layout from "../layouts/main";

export default function AppRoutes() {
    return (
        <Layout>
            <Routes>
                <Route path={RoutePath.Dashboard} element={<DashboardPage />} />
                <Route path={RoutePath.Journal} element={<></>} />
                <Route path={RoutePath.News} element={<></>} />
                <Route path={RoutePath.Calculator} element={<></>} />
                <Route path={RoutePath.Calender} element={<></>} />
            </Routes>
        </Layout>
    );
}
