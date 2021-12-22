import { useEffect, useState } from "react";

import Tour from "./Tour";
import CSS from "./index.module.css";

const url = "https://course-api.com/react-tours-project";

const Tours = () => {
    const [loading, setLoading] = useState(false);
    const [tours, setTours] = useState([]);

    async function fetchTours() {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();

            console.log(data);
            setTours(data);
        } catch (err) {
            console.error(err.message);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchTours();
    }, []);

    return (
        <main className={CSS.main}>
            {loading ? <Loading /> : (
                <>
                    {tours.map(tour => <Tour key={tour.id} />)}
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