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
import Wrapper from "../Wrapper";
import SettingsPage from "../pages/settings/settings";
import AccountSubPage from "../pages/settings/subpages/account";
import GeneralSubPage from "../pages/settings/subpages/general";
import SecuritySubPage from "../pages/settings/subpages/security";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route element={<Wrapper />}>
                    <Route path={RoutePath.Setup} element={<SetupPage />} />
                    <Route path={RoutePath.Login} element={<LoginPage />} />
                    <Route path={RoutePath.Settings} element={<SettingsPage />}>
                        <Route
                            path={RoutePath.Account}
                            element={<AccountSubPage />}
                        />
                        <Route
                            path={RoutePath.General}
                            element={<GeneralSubPage />}
                        />
                        <Route
                            path={RoutePath.Security}
                            element={<SecuritySubPage />}
                        />
                    </Route>
                    <Route element={<Layout />}>
                        <Route
                            path={RoutePath.Dashboard}
                            element={<DashboardPage />}
                        />
                        <Route
                            path={RoutePath.Journal}
                            element={<JournalPage />}
                        />
                        <Route path={RoutePath.News} element={<NewsPage />} />
                        <Route
                            path={RoutePath.Calculator}
                            element={<CalculatorPage />}
                        />
                        <Route
                            path={RoutePath.Calender}
                            element={<CalenderPage />}
                        />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}
