import { useState } from "react";

import Tour from "./Tour";
import CSS from "./index.module.css";

const url = "https://course-api.netlify.app/api/react-tours-project";

const Tours = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    return (
        <main className={CSS.tours}>
            {loading ? <Loading /> : (
                <>
                    <h3>tours page</h3>
                </>
            )}
        </main>
    )
};

const Loading = () => {
    return (
        <div className={CSS.loading}>
            <h1>loading...</h1>
        </div>
    )
};

export default Tours;