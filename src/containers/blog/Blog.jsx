import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">Mire demos de automatizaciones realizadas.</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date="Sep 26, 2021" title="Automatizacion 1"/>
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog04} date="Sep 26, 2021" title="Automatizacion 2"/>
                    <Article imgUrl={blog05} date="Sep 26, 2021" title="Automatizacion 3"/>
                </div>
            </div>
        </div>
    )
}

export default Blog
