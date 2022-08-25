import Link from "next/link";
export default function DetailPosts({category, title, date, center}) {
    return(
    <>
        <div className="flex text-white/60 space-x-4 items-center">
            <div className="uppercase">
                {category}
            </div>
            <span>&#x2022;</span>
            <div>{date}</div>
        </div>
        <h2 className={`mt-4 text-2xl ${center ? 'text-center' : ''}`}>
            <Link href="./Detail"><a>{title}</a></Link>
        </h2>
    </>
    )
}