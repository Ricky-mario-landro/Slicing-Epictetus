// import { useState } from 'react';
// import type { NextPage } from 'next';
// import Head from 'next/head';
// import Navbar from '../components/navbar';
// import MainPost from '../components/mainPost';
// import CardPost from '../components/CardPost';

// export default function Home() {
//   const [posts, setPosts] = useState([
//   {
//     thumbnail: './thumbnail-2.png',
//     category: 'Internet',
//     date: 'Aug 13, 2022',
//     title: 'How to design a product that can grow itself 10x in year',
//     description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione ex asperiores blanditiis rem temporibus veniam.',
//     authorAvatar: './author-2.png',
//     authorName: 'Jenny Wilson',
//     authorJob: 'Product Designer'   
//   }
// ]);

//   return (
//     <div className="bg-gradient-to-b from-gray-600 to-gray-900 text-white min-h-screen">
//       <Navbar/>
//       <div className="container mx-auto">
//         <MainPost />
//         <div className="flex mt-10">
//         {posts.map(post => (
//           <div className="w-4/12">
//             <CardPost {...post} />
//           </div>
//         ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home
