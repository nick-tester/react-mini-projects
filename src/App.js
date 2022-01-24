import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as APP from "./pages";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} exact />

                <Route path="/01" element={<APP.BirthdayReminder />} />
                <Route path="/02" element={<APP.Tours />} />
                <Route path="/03" element={<APP.Reviews />} />
                <Route path="/04" element={<APP.Accordion />} />
                <Route path="/05" element={<APP.Menu />} />
                <Route path="/06" element={<APP.Tabs />} />
                <Route path="/07" element={<APP.Slider />} />
                <Route path="/08" element={<APP.LoremGen />} />

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