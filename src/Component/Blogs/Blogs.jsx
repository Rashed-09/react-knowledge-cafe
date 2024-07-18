import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({bookmarksHandle, readingTimeHandle}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    // console.log(blogs)
    return (
        <div className="md:w-2/3 mr-3">
            <div>
                {
                    blogs.map(blog => <Blog 
                        key={blog.id} 
                        blog={blog} 
                        bookmarksHandle={bookmarksHandle}
                        readingTimeHandle={readingTimeHandle}
                        ></Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    bookmarksHandle:PropTypes.object.isRequired}

export default Blogs;