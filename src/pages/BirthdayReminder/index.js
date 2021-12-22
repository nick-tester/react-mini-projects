import { useState } from "react";

import data from "./data";
import CSS from "./index.module.css";

const BirthdayReminder = () => {
    const [people, setPeople] = useState(data);

    function clearAllHandler() {
        setPeople([]);
    };

    function resetHandler() {
        setPeople(data);
    }

    return (
        <main className={CSS.main}>
            <section className={CSS.container}>
                <h3>{people.length} Birthdays today</h3>
                <List people={people} />
                {people.length === 0 ? (
                    <button onClick={resetHandler}>reset</button>
                ) : (
                    <button onClick={clearAllHandler}>clear all</button>
                )}
            </section>
        </main>
    )
};

const List = ({ people }) => {
    return (
        <>
            {people.map(person => {
                return (
                    <>
                        <article key={person.id} className={CSS.person}>
                            <img src={person.image} alt={person.name} />
                            <div>
                                <h4>{person.name}</h4>
                                <p>{person.age} yrs old</p>
                            </div>
                        </article>
                    </>
                )
            })}
        </>
    );
};

export default BirthdayReminder;