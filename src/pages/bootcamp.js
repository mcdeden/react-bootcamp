import { useState, useEffect } from 'react';
import Bloglist from '../components/bloglist';
import useFetch from '../custom_hooks/useFetch';

const Bootcamp = () => {
    
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8100/blogs');
 
    return ( 
        <div>
            { error && <div> { error }</div> }
            { isLoading && <div>Loading...</div> }
            { blogs && <Bloglist blogs = {blogs} title="All Blogs" /> }
        </div>
     );
}
 
export default Bootcamp;