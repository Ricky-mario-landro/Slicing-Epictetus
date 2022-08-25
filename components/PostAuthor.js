export default function PostAuthor({authorAvatar, authorName, authorJob}) {
    return(
        <div className="flex mt-5 items-center">
            <img src={authorAvatar} className="w-12 h-12 rounded-full object-cover" alt="authorAvatar"/>
            <div className="ml-4">
                <h3>{authorName}</h3>
                <div className="mt-1 text-white/60 text-sm">
                    {authorJob}
                </div>
            </div>
        </div>
    )
}