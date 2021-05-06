import { useState, useEffect } from 'react';
import Bloglist from '../components/bloglist';

const Bootcamp = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My New Blog 1', body: 'Test new Blog 1...', author: 'mcdeden', id: 1 },
        { title: 'My New Blog 2', body: 'Test new Blog 2...', author: 'Thomas', id: 2 },
        { title: 'My New Blog 3', body: 'Test new Blog 3...', author: 'mcdeden', id: 3 },
    ]);


    const [name, setName] = useState('mcdeden');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    },[name]);
 
    return ( 
        <div>
            <Bloglist blogs = {blogs} title="All Blogs" handleDelete = {handleDelete}/>
            <button onClick={() => setName('Thomas')}>change name</button>
            <p>{ name }</p>
            {/* <Bloglist blogs = {blogs.filter(blog => blog.author === 'mcdeden')} title="mcdeden Blogs"/> */}
        </div>
     );
}
 
export default Bootcamp;