import { useState } from 'react';
import type { NextPage } from 'next';
import MockPosts from '../utility/Posts.json';
import MainPost from '../components/mainPost';
import CardPost from '../components/CardPost';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Head from "next/head";

const Home: NextPage = () => {
  const [posts, setPosts] = useState(MockPosts);
    return (
      <Layout>
        <Head>
          <title>Home &mdash; Epictetus</title>
        </Head>
        <Container>
          <MainPost />
          <div className="flex flex-wrap mt-6 -mx-4">
          {posts.map(post => (
            <div key={post.id} className="flex md:w-4/12  w-full px-4 py-6">
              <CardPost {...post} />
            </div>
          ))}
          </div>
        </Container>
      </Layout>
    )
  }

export default Home
