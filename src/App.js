import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import BirthdayReminder from "./pages/BirthdayReminder";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MiniApps />} exact>
                    <Route path="p1" element={<BirthdayReminder />} />
                </Route>
            </Routes>
        </Router>
    )
};

const MiniApps = () => {
    return <Outlet />
}

export default App;