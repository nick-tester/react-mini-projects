import { useEffect, useState } from "react";

import CSS from "./index.module.css";

const url = "https://course-api.com/react-tours-project";

// TOURS PAGE
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
                <section>
                    <div className={CSS.title}>
                        <h2>our tours</h2>
                        <div className={CSS.underline}></div>
                    </div>
                    <div>
                        {tours.map(tour => <Tour key={tour.id} {...tour} />)}
                    </div>
                </section>
            )}
        </main>
    )
};

// LOADING COMPONENT
const Loading = () => {
    return (
        <div className={CSS.loading}>
            <h1>loading...</h1>
        </div>
    )
};

// TOUR COMPONENT
const Tour = ({ id, image, info, price, name }) => {
    return (
        <article className={CSS.single__tour}>
            <img src={image} alt={name} />
            <footer>
                <div className={CSS.tour__info}>
                    <h4>{name}</h4>
                    <h4 className={CSS.tour__price}>£{price}</h4>
                </div>
                <p>{info}</p>
                <button className={CSS.delete__btn}>not interested</button>
            </footer>
        </article>
    )
};

export default Tours;