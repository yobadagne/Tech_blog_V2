import Bloglist from './Bloglist'
import useFetch from './useFetch'

const Home = () => {
  let url = 'http://localhost:8000/home';
    const {data, loading }  = useFetch(url)
    console.log(data);
  return (
      <div className='home'>
          { loading && <div> Loading </div>}
          <Bloglist blogs = {data} title="Some Blogs"/> 
      </div>
  )
}

export default Home