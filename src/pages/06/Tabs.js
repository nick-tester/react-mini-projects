import { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

import CSS from "./Tabs.module.css";

const url = "https://course-api.com/react-tabs-project";

const Tabs = () => {
    const [loading, setLoading] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();

            setJobs(data);
        } catch (err) {
            console.error(err.message);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) (<Loading />);

    const { company, dates, duties = [], title } = jobs[value] ? jobs[value] : {};

    return (
        <section className="section">
            <div className={CSS.title}>
                <h2>experience</h2>
                <div className={CSS.underline}></div>
            </div>
            <div className={CSS.jobs_center}>
                <div className={CSS.btn_container}>
                    {jobs.map((item, index) => {
                        return (
                            <button
                                key={item.id}
                                onClick={() => setValue(index)}
                                className={`${CSS.btn} ${CSS.job_btn} ${value === index && CSS.active_btn}`}>
                                {item.company}
                            </button>
                        )
                    })}
                </div>
                <article className={CSS.job_info}>
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className={CSS.job_date}>{dates}</p>
                    {duties.map((duty, index) => {
                        return <div key={index} className={CSS.job_desc}>
                            <FaAngleDoubleRight className={CSS.job_icon} />
                            <p>{duty}</p>
                        </div>
                    })}
                </article>
            </div>
        </section>
    );
};


const Loading = () => {
    return (
        <section className={`section ${CSS.loading}`}>
            <h1>loading...</h1>
        </section>
    )
};


export default Tabs;
