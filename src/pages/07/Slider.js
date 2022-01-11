import { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";

import data from "./data";
import CSS from "./Slider.module.css";


const Slider = () => {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    return (
        <section className={CSS.section}>
            <div className={CSS.title}>
                <h2>
                    <span>/</span>reviews
                </h2>
            </div>
            <div className={CSS.section_center}>
                {people.map((person, index) => {
                    const { id, image, name, title, quote } = person;
                    return (
                        <article key={id}>
                            <img src={image} alt={name} className={CSS.person_img} />
                            <h4>{name}</h4>
                            <p className={CSS.title}>{title}</p>
                            <p className={CSS.text}>{quote}</p>
                            <span className={CSS.icon}><FaQuoteRight /></span>
                        </article>
                    )
                })}
                <button className={CSS.prev}>
                    <FaChevronLeft />
                </button>
                <button className={CSS.next}>
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
}

export default Slider;
