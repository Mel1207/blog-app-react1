import { useState } from 'react'
import BlogList from './Bloglist';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Mel', id: 1},
        { title: 'The black parade', body: 'lorem ipsum...', author: 'John', id: 2},
        { title: 'CSS Life', body: 'lorem ipsum...', author: 'Mel', id: 3},
    ]);
    
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Mel')} title="Mel Blogs"/>
        </div>
    );
}

export default Home;