import { useState } from "react";
import data from "./data";
import CSS from "./Lorem.module.css";


const LoremIpsumGenerator = () => {
    const [amount, setAmount] = useState(0);
    const [text, setText] = useState([]);

    function formSubmitHandler(e) {
        e.preventDefault();
        let tempAmount = +amount
        if (tempAmount <= 0) {
            tempAmount = 1;
        }
        if (tempAmount > data.length) {
            tempAmount = data.length;
        }

        setText(data.splice(0, tempAmount));
    }

    return (
        <section className={CSS.section_center}>
            <h2>Lorem Ipsum Generator App</h2>
            <form className={CSS.lorem_form} onSubmit={formSubmitHandler}>
                <label htmlFor="amount">paragraph: </label>
                <input
                    type="number"
                    id="amount"
                    name={amount}
                    value={amount}
                    onChange={e => setAmount(e.target.value)} />
                <button type="submit" className="btn">generate</button>
            </form>
            <article className={CSS.lorem_text}>
                {text.map((t, i) => {
                    return (
                        <p key={i}>{t}</p>
                    )
                })}
            </article>
        </section>
    );
}

export default LoremIpsumGenerator;
