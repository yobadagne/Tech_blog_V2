const fetch = require("node-fetch");
// import fetch from "node-fetch";
fetch('http://localhost:8000/home')
                .then(res => {
                    return res.json();
                })
                .then(data =>{console.log(data);})



                {blogs.map((blog) => {
                    <div className="blog-preview" key={blog.Blog_id}>
                       <Link to={`/blogs/${blog.Blog_id}`}>
                        <h2>{blog.Blog_title}</h2>
                        <p>Written by {blog.User_id}</p>
                        </Link> 
                      
                    </div>;
                  })} 



                  <div className="mine">
                  {blogs.map(element=><div>{element.Blog_title}</div>)}
                </div>