import stylePosts from '../styles/Posts.module.css';
import Image from "next/image";
import {format} from "date-fns";

const Posts = ({ posts }) => {
    const postTitle = 'franceinfo';

    const formatDate = (date, option) => {
        let dateFormat = 'dd/MM/yyyy';

        if (option === 'hour') {
            dateFormat = 'HH:mm';
        }

        return format(new Date(date), dateFormat);
    }

    return (
        <div>
            <h1 className="m-10 text-2xl">News</h1>
            <div className="grid grid-cols-1">
                {posts.map(post => (
                    <div className={stylePosts.card} key={post._id}>
                        <div className="flex">
                            <Image className="rounded-full" alt="FTV icon" height={30} width={30} src="/ftv_icon.svg" />
                            <h5 className="font-bold ml-3">{postTitle}</h5>
                        </div>
                        <div className="ml-10 mt-2">
                            <p>{post.text}</p>
                        </div>

                        <div className="flex mt-4 text-sm font-semi-bold justify-between text-zinc-700">
                            <p className="ml-10">Le {formatDate(post.date)} à {formatDate(post.date, 'hour')}.</p>
                            <p>Par {post.author}.</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Posts;