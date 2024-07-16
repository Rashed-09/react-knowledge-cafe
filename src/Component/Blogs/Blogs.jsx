import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    // console.log(blogs)
    return (
        <div className="md:w-2/3">
            <div>
                <h1 className="text-2xl font-bold">Blogs</h1>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;