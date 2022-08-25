import Link from "next/link";
import ArtikelPost from "./ArtikelPost";
export default function cardPost({ thumbnail, ...artikelPost }) {
    return (
        <article>
            <Link href="./Detail">
                <a><img src={thumbnail} className="w-full rounded mb-4" alt="thumbnail"/></a>
            </Link>
            <ArtikelPost
              {...artikelPost}
            />
        </article>
    )
}