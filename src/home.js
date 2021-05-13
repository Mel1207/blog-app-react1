import { useState } from 'react'
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Mel', id: 1},
        { title: 'The black parade', body: 'lorem ipsum...', author: 'John', id: 2},
        { title: 'CSS Life', body: 'lorem ipsum...', author: 'Mel', id: 3},
    ]);

    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlog)
    }
    
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
        </div>
    );
}

export default Home;