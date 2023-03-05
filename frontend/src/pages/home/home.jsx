import Header from "../../component/header/header"
import "./home.css"
import Posts from "../../component/posts/posts"
import { useEffect, useState } from "react"
import axios from "axios"

function Home() {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
const fetchPosts=async()=>{
    const res=await axios.get('/')
    setPosts(res.data)
}
fetchPosts();
    },[])
    return (
        <>
            <Header />
            <Posts posts={posts}/>
        </>
    )
}

export default Home;