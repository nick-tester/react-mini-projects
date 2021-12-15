import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import BirthdayReminder from "./pages/BirthdayReminder";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MiniApps />} exact>
                    <Route path="birthday_reminder" element={<BirthdayReminder />} />
                </Route>
            </Routes>
        </Router>
    )
};

const MiniApps = () => {
    return <Outlet />
}

export default App;