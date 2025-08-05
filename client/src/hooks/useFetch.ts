import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = (url:string)=>{
    const [loading, setloading] = useState(false)
    const [data, setdata] = useState<any>({})
    const [error, seterror] = useState<string | null>(null)

    const fetchData = async (url:string)=>{
        try {
            setloading(true)
            const token = localStorage.getItem('token')
            const response = await axios.get(url,{
                headers:{
                    'Authorization':'Bearer '+token
                }
            })
            setdata(response.data)
        } catch (error) {
            seterror('Something went wrong, try again');
            console.log(error)
        }finally{
            setloading(false);
        }
    }

    useEffect(() => {
        fetchData(url)
    }, [url])
    
    return {
        data,
        loading,
        error
    }
}