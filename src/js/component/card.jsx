import React from "react";

export const Card = () => {
    return (
        <div className="card text-center">
            <img src="https://dummyimage.com/400x250/fff/aaa" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque omnis inventore accusamus repudiandae libero?</p>
                <a href="#" className="btn btn-primary">Find out more</a>
            </div>
        </div>
    )
};