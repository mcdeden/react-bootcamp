import { useState, useEffect } from 'react';
import Bloglist from '../components/bloglist';

const Bootcamp = () => {
    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8100/blogs')
        .then(res => {
            return res.json();
        })
        .then((data) => {
            setBlogs(data);
        })
    },[]);
 
    return ( 
        <div>
            {blogs && <Bloglist blogs = {blogs} title="All Blogs" />}
        </div>
     );
}
 
export default Bootcamp;