import React from "react";

export const Card = () => {
    return (
        <div className="card text-center border col-4" style={{ width: "18rem" }}>
            <img src="https://dummyimage.com/500x325/9e9e9e/ffffff" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title display-4">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque omnis inventore accusamus repudiandae libero?</p>
                <a href="#" className="btn btn-primary">Find out more</a>
            </div>
        </div>
    )
};