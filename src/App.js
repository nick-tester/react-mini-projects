import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BirthdayReminder from "./pages/BirthdayReminder";
import Tours from "./pages/Tours";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/p1" element={<BirthdayReminder />} />
                <Route path="/p2" element={<Tours />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    )
};

const Home = () => {
    return <h1>home page</h1>
}

const PageNotFound = () => <h1>Page Not Found!</h1>

export default App;