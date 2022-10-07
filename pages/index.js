import Head from 'next/head'
import Posts from "../components/Posts";
import {useEffect, useState} from "react";

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const res = await fetch('http://localhost:3002/topics');
            const data = await res.json();

            setPosts(data);
        };

        getPosts();
    }, []);

    return (
        <div>
      <Head>
        <title>FTV - KERMOUN SAIFEDDINE</title>
        <meta name="description" content="Technical test for FTV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <div className="md:container md:mx-auto">
                <Posts posts={posts}/>
            </div>
    </div>
    )
}

export default Home;