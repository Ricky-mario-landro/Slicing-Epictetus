import DetailPosts from '../components/DetailPosts'
import PostAuthor from '../components/PostAuthor'
export default function artikelPost({
    category,
    date,
    title,
    description,
    authorAvatar,
    authorName,
    authorJob
}) {
return (
    <>
        <DetailPosts
            category={category}
            date={date}
            title={title}
        />
        <p className="mt-5 text-white/60 w-10/12">
            {description}
        </p>
        <PostAuthor
            authorAvatar={authorAvatar}
            authorName={authorName}
            authorJob={authorJob}
        />
    </>
)
}