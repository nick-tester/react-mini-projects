import { useState } from "react";

import CSS from "./Menu.module.css";
import items from "./data";

const allCategories = ["all", ...new Set(items.map(item => item.category))];

const Main = () => {
    const [menuItems, setMenuItems] = useState(items);
    // eslint-disable-next-line
    const [categories, setCategories] = useState(allCategories);

    function filterItems(cat) {
        const newItems = items.filter(item => item.category === cat);
        if (cat === "all") {
            setMenuItems(items)
        } else {
            setMenuItems(newItems);
        }
    };

    return (
        <main>
            <section className={`${CSS.menu} ${CSS.section}`}>
                <div className={CSS.title}>
                    <h2>our menu</h2>
                    <div className={CSS.underline}></div>
                </div>
                <Categories cats={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    )
};


const Categories = ({ cats, filterItems }) => {
    return (
        <div className={CSS.btn_container}>
            {cats.map((cat, index) => {
                return (
                    <button
                        type="button"
                        key={index}
                        className={CSS.filter_btn}
                        onClick={() => filterItems(cat)}>
                        {cat}
                    </button>
                )
            })}
        </div>
    )
};


const Menu = ({ items }) => {
    return (
        <div className={CSS.section_center}>
            {items.map(item => {
                const { id, title, img, desc, price } = item;
                return (
                    <article key={id} className={CSS.menu_item}>
                        <img src={img} alt={title} className={CSS.photo} />
                        <div className={CSS.item_info}>
                            <header>
                                <h4>{title}</h4>
                                <h4 className={CSS.price}>{price}</h4>
                            </header>
                            <p className={CSS.item_text}>{desc}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
};

export default Main;