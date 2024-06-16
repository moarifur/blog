import useFetch from "../utils/useFetch.js";

const CategoryPage = () => {
    let {loading, data, error} = useFetch(`${import.meta.env.VITE_BASE_URL}/api/categories`)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error!</p>
    console.log(data)
    return (
        <div>
            Category Page
        </div>

    )
};

export default CategoryPage;