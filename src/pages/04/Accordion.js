import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import CSS from "./Accordion.module.css";
import data from "./data";

const Accordion = () => {
    // eslint-disable-next-line
    const [questions, setQuestions] = useState([...data]);

    return (
        <main className={CSS.main}>
            <div className={CSS.container}>
                <h3>question and answers about login</h3>
                <section className={CSS.info}>
                    {questions.map(question => {
                        return <SingleQestion key={question.id} {...question} />
                    })}
                </section>
            </div>
        </main>
    )
};


const SingleQestion = ({ title, info }) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <article className={CSS.question}>
            <header>
                <h4>{title}</h4>
                <button className={CSS.btn} onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    )
}

export default Accordion;