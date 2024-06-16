import useFetch from "../utils/useFetch.js";
import {Link} from "react-router-dom";

const BlogContent = () => {
    // variable name should be "data", "loading" and "error", other name will give undefined result
    let {loading, data, error} = useFetch(`${import.meta.env.VITE_BASE_URL}/api/blogs?populate=*`)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error!</p>

    const blogs = data.data
    console.log(blogs)
    return (
        <div className='w-full bg-[#f9f9f9] py-[100px] px-[100px]'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black'>
                    {blogs.map((blog)=>
                        <Link key={blog.id} to={`/blog/${blog.id}`}>
                            <div  className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                                {/* this src url is like: http://127.0.0.1:1337/uploads/01google_rollback_cqvl_jumbo_696d6be5ec.webp */}
                                {/* Base URL: http://127.0.0.1:1337 */}
                                {/* Strapi's Image URL: /uploads/01google_rollback_cqvl_jumbo_696d6be5ec.webp */}
                                <img className='h-56 w-full object-cover' src={`${import.meta.env.VITE_BASE_URL}${blog.attributes.titleImage.data.attributes.url}`} alt=''/>
                                <div className='p-8'>
                                    <h3 className='text-neutral-700 font-bold text-2xl my-1'>{blog.attributes.title}</h3>
                                    <p className='text-gray-600 text-xl mt-5'>{blog.attributes.smallDescription}</p>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogContent;