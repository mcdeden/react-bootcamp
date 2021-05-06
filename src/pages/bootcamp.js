import { useState, useEffect } from 'react';
import Bloglist from '../components/bloglist';

const Bootcamp = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => { //this setTimeout is just for simulation
            fetch('http://localhost:8100/blogs')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                setIsLoading(false);
            })
        }, 1000);
    },[]);
 
    return ( 
        <div>
            {isLoading && <div>Loading...</div>}
            {blogs && <Bloglist blogs = {blogs} title="All Blogs" />}
        </div>
     );
}
 
export default Bootcamp;