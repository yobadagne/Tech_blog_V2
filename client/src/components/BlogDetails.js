import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import useFetch from "./useFetch";

const BlogDetails = () => {
  
    let { id } = useParams();
    let url = 'http://localhost:8000/blogs/' + id;
    const { data , loading } = useFetch(url);

  return (
    <div className="blog-details">
        { loading && <div> Loading...</div>}
        {data.map(blog => <div><h1>{blog.Blog_title}</h1><p> {blog.Blog_content}</p></div> )}
        
    </div>
  )
}

export default BlogDetails