import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Mel', id: 1},
        { title: 'The black parade', body: 'lorem ipsum...', author: 'John', id: 2},
        { title: 'CSS Life', body: 'lorem ipsum...', author: 'Mel', id: 3},
    ]);

    const [name, setName] = useState('mel');

    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlog)
    }
    
    useEffect(() => {
        console.log('use effect run');
        console.log(name)
    }, [name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>

            <button onClick={() => setName('luigi')}>change name</button>
            <p>{ name }</p>
        </div>
    );
}

export default Home;