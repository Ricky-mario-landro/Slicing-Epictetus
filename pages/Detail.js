import Layout from '../components/Layout';
import Container from '../components/Container';
import DetailPosts from '../components/DetailPosts';
import PostAuthor from '../components/PostAuthor';
import Head from "next/head";

export default function Detail() {
    return(
        <Layout>
            <Head>
              <title>Detail &mdash; Epictetus</title>
            </Head>
            <Container>
                <div className='flex flex-col md:w-10/12 w-full mx-auto items-center'>
                    <DetailPosts
                        category="UI Design"
                        date="23 Aug, 2022"
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, officia."
                        center
                    />
                    <PostAuthor
                    authorName="Leslie Alexander"
                    authorJob="UI Designer"
                    authorAvatar="./author-1.png"
                    />

                    <div className='mx-auto my-10 md:w-10/12 w-full'>
                        <img src="./detail-image.png" className='w-screen rounded-lg' alt="detail-image"/>
                    </div>
                    <div className='md:w-8/12 w-full mx-auto leading-relaxed'>
                        <p className='text-xl mb-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate quod aliquid odio voluptatum unde, distinctio eaque tenetur? Sunt explicabo neque sint earum perferendis ipsum aperiam, debitis eos veniam repellat quas similique fugit rerum.
                        </p>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, adipisci autem mollitia sed doloremque voluptatem optio cum enim totam vitae accusamus fugit facere itaque reiciendis.</p>
                        <p className='mb-4'>doloremque voluptatem optio cum enim totam vitae accusamus fugit facere itaque reiciendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, adipisci autem mollitia sed</p>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}