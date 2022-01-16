import { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";

import data from "./data";
import CSS from "./Slider.module.css";


const Slider = () => {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    function prevButtonHandler() {
        if (index === 0) {
            setIndex(people.length - 1)
        } else {
            setIndex(index - 1)
        }
    };

    function nextButtonHandler() {
        if (index === people.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    };

    return (
        <section className={CSS.section}>
            <div className={CSS.title}>
                <h2>
                    <span>/</span>reviews
                </h2>
            </div>
            <div className={CSS.section_center}>
                {people.map((person, peopleMapIndex) => {
                    let position = CSS.nextSlide;

                    if (peopleMapIndex === index) {
                        position = CSS.activeSlide;
                    }

                    if (peopleMapIndex === index - 1 || (index === 0 && peopleMapIndex === people.length - 1)) {
                        position = CSS.lastSlide;
                    }

                    const { id, image, name, title, quote } = person;

                    return (
                        <article key={id} className={`${CSS.article} ${position}`}>
                            <img src={image} alt={name} className={CSS.person_img} />
                            <h4>{name}</h4>
                            <p className={CSS.title}>{title}</p>
                            <p className={CSS.text}>{quote}</p>
                            <span className={CSS.icon}><FaQuoteRight /></span>
                        </article>
                    )
                })}
                <button className={CSS.prev} onClick={prevButtonHandler}>
                    <FaChevronLeft />
                </button>
                <button className={CSS.next} onClick={nextButtonHandler}>
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
}

export default Slider;
