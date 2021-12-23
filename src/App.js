import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BirthdayReminder from "./pages/01/BirthdayReminder";
import Tours from "./pages/02/Tours";
import Reviews from "./pages/03/Reviews";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/01" element={<BirthdayReminder />} />
                <Route path="/02" element={<Tours />} />
                <Route path="/03" element={<Reviews />} />
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