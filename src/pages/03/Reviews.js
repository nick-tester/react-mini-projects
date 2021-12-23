import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";
import CSS from "./Reviews.module.css";

const Reviews = () => {
    return (
        <main className={CSS.main}>
            <div className={CSS.title}>
                <h2>our reviews</h2>
                <div className={CSS.underline}></div>
            </div>
            <div className={CSS.container}>
                <Review />
            </div>
        </main>
    );
};


const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text, info } = people[index];

    return (
        <article className={CSS.review}>
            <div className={CSS.img_container}>
                <img src={image} alt={name} className={CSS.person_img} />
                <span className={CSS.quote_icon}>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className={CSS.author}>{name}</h4>
            <p className={CSS.job}>{job}</p>
            <p className={info}>{text}</p>
            <div className={CSS.button_container}>
                <button className={CSS.prev_btn}><FaChevronLeft /></button>
                <button className={CSS.next_btn}><FaChevronRight /></button>
            </div>
            <button className={CSS.random_btn}>suprise me</button>
        </article>
    )
};



export default Reviews;
