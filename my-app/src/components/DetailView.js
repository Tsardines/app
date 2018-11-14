import React from 'react';

const DetailView = ({ people }) => {
    const {name, title, email, office, manager} = people;

    return (
        <section className="detail-view">
            <div className="data-wrap">
                <h1 className="name"><strong>Name: </strong> {name} </h1>
                <h3 className="title"><strong>Title: </strong> {title} </h3>
                <h3 className="email"><strong>Email: </strong> {email} </h3>
                <h3 className="office"><strong>Office: </strong> {office} </h3>
                <h3 className="manager"><strong>Manager: </strong> {manager} </h3>
            </div>
        </section>
    )
}

export default DetailView;