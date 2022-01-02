import { useEffect, useState } from "react";
import CSS from "./Tabs.module.css";

const url = "https://course-api.com/react-tabs-project";

const Tabs = () => {
    const [loading, setLoading] = useState(false);
    const [jobs, setJobs] = useState([]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();

            console.log(data);
            setJobs(data);
        } catch (err) {
            console.error(err.message);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <h2>loading...</h2>
    }

    return (
        <h2>
            tabs app
        </h2>
    );
};




export default Tabs;
