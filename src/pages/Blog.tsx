import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link } from "react-router-dom";
import PageTitle from "../components/generic/PageTitle";

export const Blog = () => {
  const { blogPosts } = useContext(BlogContext);

  return (
    <div>
      <PageTitle title={`HotScore - News`} />

      <h1 className="text-center mb-5">News</h1>
      {blogPosts.map((post) => (
        <Link to={`/post/${post.id}`} key={post.id}>
          <div className="flex flex-row gap-2 p-3 dark:hover:bg-zinc-800 hover:bg-zinc-50 cursor-pointer transition-colors ease-in-out rounded-md">
            <img src={post.imgSrc} alt={post.title} className="rounded-md max-h-[100px] flex-1" />
            <div className="p-1 mt-1 flex flex-col gap-3">
              <p className="text-xl font-bold leading-4 line-clamp-1 dark:text-white text-zinc-800">{post.title}</p>
              <p className="text-xs line-clamp-2 opacity-75 font-extralight dark:text-white text-zinc-800">
                {post.date}
              </p>
              <p className="text-xs line-clamp-2">{post.content}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
