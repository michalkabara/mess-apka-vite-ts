import { Link } from "react-router-dom";
import post1Img from "../../img/post1.jpg";
import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";

export const HomePageBlog = () => {
  const { blogPosts } = useContext(BlogContext);

  return (
    <div className="flex flex-col gap-1 bg-white dark:bg-zinc-800  dark:bg-opacity-50 rounded-md overflow-hidden">
      <p className="text-center pt-4 font-bold dark:text-white text-zinc-800">️‍️‍🔥Hot News</p>
      {blogPosts.map((post) => (
        <Link to={`/post/${post.id}`} key={post.id}>
          <div className="flex flex-row gap-2 p-3 dark:hover:bg-zinc-800 hover:bg-zinc-50 cursor-pointer transition-colors ease-in-out ">
            <img src={post1Img} alt={post.title} className="rounded-md max-h-[100px] w-[70px]" />
            <div className="p-1 mt-1 flex flex-col gap-2">
              <p className="text-xs font-bold leading-4 line-clamp-1 dark:text-white text-zinc-800">{post.title}</p>
              {/* <p className="text-xs line-clamp-2">{post.teaser}</p> */}
              <p className="text-xs line-clamp-2 opacity-75 font-extralight dark:text-white text-zinc-800">
                22 Styczeń 2024
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
