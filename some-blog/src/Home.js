import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:7000/blogs').then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data)
            // setBlogs(data);
        })
    }, []);

    return(
        <div className="home">
            {blogs &&  <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} /> }
        </div>
    )
}

export default Home;

// Note:
// useEffect is a function that runs on every render
// command to create a json server to watch the db.json file from its location on a specific port of your choice(7000)
// npx json-server --watch data/db.json --port 7000