import React, { useState } from 'react';
import './CourseCard.css'; // Ensure to import the CSS file separately

const CourseCard = () => {
    const [clicked, setClicked] = useState(false);

    const course = {
        course_name: 'Sample Course',
        course_desc: 'An introductory course to advanced topics.',
        course_author: 'Author Name',
        course_img: 'https://s-media-cache-ak0.pinimg.com/736x/49/80/6f/49806f3f1c7483093855ebca1b8ae2c4.jpg',
        course_duration: '4 weeks',
        course_price: 50,
        course_original_price: 100
    };

    return (
        <div className="wrapper">
            <div className="container">
                <div className="top" style={{ backgroundImage: `url(${course.course_img})` }}></div>
                <div className={`bottom ${clicked ? 'clicked' : ''}`}>
                    <div className="left">
                        <div className="details">
                            <h1>{course.course_name}</h1>
                            <p>{course.course_desc}</p>
                            <p>Author: {course.course_author}</p>
                            <p>Duration: {course.course_duration}</p>
                            <p>Price: ${course.course_price} (Original: ${course.course_original_price})</p>
                        </div>
                        <div className="buy" onClick={() => setClicked(true)}>
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                    </div>
                    <div className="right">
                        <div className="details">
                            <h1>Enrolled!</h1>
                            <p>You have successfully enrolled in this course.</p>
                        </div>
                        <div className="done">
                            <i className="fas fa-check"></i>
                        </div>
                        <div className="remove" onClick={() => setClicked(false)}>
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                </div>
                <div className="inside">
                    <i className="fas fa-info-circle icon"></i>
                    <div className="contents">
                        <table>
                            <tbody>
                                <tr><td>Course Name</td><td>{course.course_name}</td></tr>
                                <tr><td>Description</td><td>{course.course_desc}</td></tr>
                                <tr><td>Author</td><td>{course.course_author}</td></tr>
                                <tr><td>Duration</td><td>{course.course_duration}</td></tr>
                                <tr><td>Price</td><td>${course.course_price}</td></tr>
                                <tr><td>Original Price</td><td>${course.course_original_price}</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;