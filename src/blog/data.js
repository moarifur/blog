export const link = `${import.meta.env.VITE_BASE_URL}/api/blogs?populate=*`
export const options = {
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
};