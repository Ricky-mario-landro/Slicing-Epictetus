import { useState } from 'react';
import Container from '../components/Container';
import CardPost from '../components/CardPost';
import Layout from '../components/Layout';
import MockPosts from '../utility/Posts.json';
import SectionHeader from '../components/SectionHeader';
import Head from "next/head";

export default function Posts() {
const [posts, setPosts] = useState(MockPosts);
    return(
    <Layout>
      <Head>
        <title>Posts &mdash; Epictetus</title>
      </Head>
        <Container>
        <SectionHeader>UI Design</SectionHeader>
        {!posts.length ? (
            <div className='py-20 text-center'>
                <h2 className='text-6xl'>No result 😪</h2>
                <p className='text-white/60 mt-4 text-xl md:w-6/12 w-full mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quo explicabo quos sit?</p>
            </div>
        ) : (
        <div className="flex flex-wrap mt-6 -mx-4">
          {posts.map(post => (
            <div key={post.id} className="flex md:w-4/12  w-full px-4 py-6">
              <CardPost {...post} />
            </div>
          ))}
        </div>
        )}
        </Container>
    </Layout>
    );
}