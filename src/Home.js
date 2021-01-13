
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

  const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs');

   return ( 

        <div className="home">
          {error && <div>{error} </div>}
          {isPending && <div>Loading your page...</div>}
          {blogs && <BlogList blogs={blogs} title="Blogs by F.R.I.E.N.D.S!!" />}
          {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Ross Geller")} title="Blogs by ROSS!!"/> */}
        </div>
     );
}
 
export default Home;