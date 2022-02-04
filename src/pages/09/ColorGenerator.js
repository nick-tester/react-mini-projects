import { useState } from "react";
import Values from "values.js";
import CSS from "./Color.module.css";


const Colorgenerator = () => {
    const [color, setColor] = useState("");
    const [error, setError] = useState(false);
    const [list, setList] = useState([]); // color shades and tints list

    function handleSubmit(e) {
        e.preventDefault();
        setError(false);
        try {
            let colors = new Values(color).all(10);
            console.log(colors);
        } catch (err) {
            setError(true);
            console.error(err.message);
        }
    };



    return (
        <div className="section">
            <section className={CSS.container}>
                <h3>color generator</h3>
                <form onSubmit={handleSubmit} className={CSS.form}>
                    <input
                        type="text"
                        name="color"
                        value={color}
                        onChange={e => setColor(e.target.value)}
                        placeholder="#f150225"
                        className={error ? CSS.error : null} />
                    <button type="submit" className={CSS.btn}>submit</button>
                </form>
            </section>
            <section className={CSS.colors}>
                <h4>list here</h4>
                <SingleColor />
            </section>
        </div>
    );
};

const SingleColor = () => {
    return <>&nbsp;</>
};

export default Colorgenerator;
