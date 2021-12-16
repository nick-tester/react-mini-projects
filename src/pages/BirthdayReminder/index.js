import { useState } from "react";
import data from "./assets/data";
import "./assets/index.css";
import List from "./List";

const BirthdayReminder = () => {
    const [people, setPeople] = useState(data);

    function clearAllHandler() {
        setPeople([]);
    };

    function resetHandler() {
        setPeople(data);
    }

    return (
        <main>
            <section className="container">
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

export default BirthdayReminder;