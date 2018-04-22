import React from 'react';

const Course = (props) => (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
            <h5 className="card-title">{props.course.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.course.author}</h6>
            <p className="card-text">{props.course.description}</p>
            <a href={props.course.url} className="card-link">Go to course ...</a>
        </div>
    </div>
);

export default Course;