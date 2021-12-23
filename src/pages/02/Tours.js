import { useEffect, useState } from "react";

import CSS from "./Tours.module.css";

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

    function removeTour(id) {
        const newTours = tours.filter(tour => tour.id !== id);

        setTours(newTours);
    }

    useEffect(() => {
        fetchTours();
    }, []);

    return (
        <main className={CSS.main}>
            {loading ? <Loading /> : (
                <section>
                    <div className={CSS.title}>
                        <h2>{tours.length !== 0 ? "our tours" : "no tours left"}</h2>
                        {tours.length !== 0 ? (
                            <div className={CSS.underline}></div>
                        ) : (
                            <button onClick={fetchTours} className="btn">refresh</button>
                        )}
                    </div>
                    <div>
                        {tours.map(tour => <Tour key={tour.id} {...tour} removeTour={removeTour} />)}
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
const Tour = ({ id, image, info, price, name, removeTour }) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <article className={CSS.single__tour}>
            <img src={image} alt={name} />
            <footer>
                <div className={CSS.tour__info}>
                    <h4>{name}</h4>
                    <h4 className={CSS.tour__price}>£{price}</h4>
                </div>
                <p>
                    {readMore ? info : info.substring(0, 200) + " ... "}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? "read less" : "read more"}
                    </button>
                </p>
                <button className={CSS.delete__btn} onClick={() => removeTour(id)}>not interested</button>
            </footer>
        </article>
    )
};

export default Tours;