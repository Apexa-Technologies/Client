import { Route, Routes } from "react-router-dom";
import { RoutePath } from "../constants/path";
import DashboardPage from "../pages/dashboard/Dashboard";
import Layout from "../layouts/main";
import SetupPage from "../pages/setup/setup";
import LoginPage from "../pages/login/login";
import CalenderPage from "../pages/calender/calender";
import CalculatorPage from "../pages/calculator/calculator";
import NewsPage from "../pages/news/news";
import JournalPage from "../pages/journal/journal";

export default function AppRoutes() {
    return (
        <Layout>
            <Routes>
                <Route path={RoutePath.Dashboard} element={<DashboardPage />} />
                <Route path={RoutePath.Journal} element={<JournalPage />} />
                <Route path={RoutePath.News} element={<NewsPage />} />
                <Route path={RoutePath.Calculator} element={<CalculatorPage />} />
                <Route path={RoutePath.Calender} element={<CalenderPage />} />
                <Route path={RoutePath.Setup} element={<SetupPage />} />
                <Route path={RoutePath.Login} element={<LoginPage />} />
            </Routes>
        </Layout>
    );
}
