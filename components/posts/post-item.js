import Link from 'next/link'
import classes from './post-item.module.css'
import Image from 'next/image'

function PostItem(props) {
    const { title, image, excerpt, date, slug } = props.post

    const fromattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const imagePath = `/images/posts/${slug}/${image}`
    const linkPath = `/posts/${slug}`
    return (
        <li className={classes.post}>
            <Link href={linkPath}>
                <a>
                    <div className={classes.image}>
                        <Image
                            src={imagePath}
                            alt={title}
                            width={300}
                            height={200}
                            layout='responsive'
                        />
                    </div>

                    <div className={classes.content}>
                        <h3>{title}</h3>
                        <time>{fromattedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default PostItem
