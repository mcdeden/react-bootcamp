import { useState, useEffect } from 'react';
import Bloglist from '../components/bloglist';

const Bootcamp = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => { //this setTimeout is just for simulation
            fetch('http://localhost:8100/blogs')
            .then(res => {
                if (!res.ok) {
                  throw Error('Could not the data from the resource');  
                } 
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err.message);
            })
        }, 1000);
    },[]);
 
    return ( 
        <div>
            { error && <div> { error }</div> }
            { isLoading && <div>Loading...</div> }
            { blogs && <Bloglist blogs = {blogs} title="All Blogs" /> }
        </div>
     );
}
 
export default Bootcamp;