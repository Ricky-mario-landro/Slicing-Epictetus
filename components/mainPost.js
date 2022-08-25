import Link from "next/link";
import ArtikelPost from './ArtikelPost'
export default function mainPost() {
    return (
        <article>
            <div className="flex -mx-4 lg:items-center items-start flex-wrap">
                {/* 2:07:01 */}
                <div className='px-4 lg:w-8/12 md:w-7/12 w-full'>
                    <Link href="./Detail">
                        <a><img src="./featured-thumbnail.png" className='mb-4 md:mb-0 rounded-xl w-full' alt='featured-thumbnail'/></a>
                    </Link>
                </div>   
                <div className='px-4 lg:w-4/12 md:w-5/12 w-full'>
                    <ArtikelPost
                    category="UI DESIGN"
                    date="Aug, 14 2022"
                    title="Understanding color theory: the color wheel and finding complementary colors"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nostrum voluptate expedita aspernatur labore porro sapiente voluptates! Similique soluta in tempora asperiores provident, possimus enim adipisci ipsa voluptas modi quis?"
                    authorAvatar="./author-1.png"
                    authorName="Leslie Alexander"
                    authorJob="UI Designer"
                    />
                </div>
            </div>
            <hr className='border-white/10 mt-10 md:hidden'/>
        </article>
    );
}