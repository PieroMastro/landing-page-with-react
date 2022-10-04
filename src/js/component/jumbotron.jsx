import React from "react";

export const Jumbotron = () => {
    return (
        <div className="bg-light py-5 px-4 mt-3 rounded-3 col-12" >
            <h1 className="display-1 mb-5">A Warm Welcome!</h1>
            <p className="pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam velit omnis rerum minus distinctio dignissimos quidem beatae alias, aut doloremque incidunt temporibus amet fuga modi, nam voluptatum minima quibusdam?</p>
            <button type="button" className="btn btn-primary">Call to action!</button>
        </div>
    );
};