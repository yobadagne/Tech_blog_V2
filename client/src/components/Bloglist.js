import React from "react";
import { Link } from "react-router-dom";

const Bloglist = ({ blogs, title }) => {
  console.log(blogs);
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      
      {blogs.map(blog => 
                    <div className="blog-preview" key={blog.Blog_id}>
                      <Link to={`/blogs/${blog.Blog_id}`}>
                        <h2>{blog.Blog_title}</h2>
                        <p>Written by {blog.User_id}</p>
                      </Link> 
                      
                    </div>
        )} 
    
    </div>
  );
};

export default Bloglist;
