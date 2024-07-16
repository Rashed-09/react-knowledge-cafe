import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    console.log(blogs)
    return (
        <div>
            <div>
                {
                    blogs.map(blog => <img key={blog.id} src={blog.author_img}></img>)
                }
            </div>
        </div>
    );
};

export default Blogs;