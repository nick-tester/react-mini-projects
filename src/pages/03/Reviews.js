import CSS from "./Reviews.module.css";

const Reviews = () => {
    return (
        <main className={CSS.main}>
            <div className={CSS.title}>
                <h2>our reviews</h2>
                <div className={CSS.underline}></div>
            </div>
            <Review />
        </main>
    );
};


const Review = () => {
    return <h3>review component</h3>
};



export default Reviews;
