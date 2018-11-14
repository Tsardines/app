import React from 'react';

import PeopleCell from './PeopleCell.js';

import { peopleClasses } from './peopleClasses'

const PeopleList = ({ handleOnClick }) => {
    const cells = peopleClasses.map(peopleClass => {
        return (
            <PeopleCell
                key={peopleClass.id}
                peopleClass={peopleClass}
                handleOnClick={handleOnClick}
            />
        );
    });

    return (
        <section className="people-list">
            {cells}
        </section>
    )
}

export default PeopleList;