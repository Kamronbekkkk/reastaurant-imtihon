import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import "./Menu.css";

export default function Menu() {
    const data = useLoaderData();

    return (
        <>
            <header>
                <div className="menu-header">
                    <h1>Our Restaurants</h1>
                </div>
            </header>
            <main>
                <div className="menu">
                    {data.map((restaurant) => (
                        <div className="menu-card" key={restaurant.id}>
                            <img
                                className="menu-image"
                                src={restaurant.imageCarousel?.images[0].url}
                                alt={restaurant.restaurant.name}
                            />
                            <h2 className="menu-name">{restaurant.restaurant.name}</h2>
                            <p className="menu-address">
                                {restaurant.restaurant.address.line1}
                                <br />
                                {restaurant.restaurant.address.line2}
                            </p>
                            <p className="menu-hours">{restaurant.restaurant.hours}</p>
                            <div className="menu-times">
                                <ul className="time-list">
                                    {restaurant.timeSlots.slice(0, 2).map((el, index) => (
                                        <li
                                            key={index}
                                            className={`time-item ${
                                                el.available ? 'time-true' : 'time-false'
                                            }`}
                                        >
                                            {el.time}
                                        </li>
                                    ))}
                                </ul>
                                <Link to={`/single/${restaurant.id}`} className="menu-more">
                                    More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
