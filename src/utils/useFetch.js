/*--------------------------- Reference --------------------------
* (01) https://youtu.be/wKmpOWYx_14?si=utMkTFj0FtXPVSjt
* (02) https://www.youtube.com/watch?v=CrtmSbz6k5E
* */

import {useEffect, useState} from 'react';

const useFetch = (url) => {
    const [data,setData] =useState(null)
    const [error,setError] =useState(null)
    const [loading,setLoading] =useState(true)

    useEffect(() => {
        const fetchData = async ()=>{
            setLoading(true)
            try {
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData()

    }, [url])


    return {loading, error, data}
}

export default useFetch