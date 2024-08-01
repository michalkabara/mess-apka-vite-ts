import { Link } from "react-router-dom";

const posts = [
  {
    id: "1236",
    title: "Lorem ipsum dolor sit amet",
    imgLink:
      "https://img.freepik.com/free-photo/soccer-player-action-stadium_1150-14598.jpg?ga=GA1.1.911811244.1711136200&",
    teaser:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates doloremque cumque, magni praesentium dolor accusantium beatae, minima inventore obcaecati quo est ratione blanditiis autem error eaque rerum omnis culpa repellendus.",
  },
  {
    id: "1235",
    title: "Lorem ipsum dolor sit amet",
    imgLink:
      "https://img.freepik.com/free-photo/soccer-player-action-stadium_1150-14598.jpg?ga=GA1.1.911811244.1711136200&",
    teaser:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates doloremque cumque, magni praesentium dolor accusantium beatae, minima inventore obcaecati quo est ratione blanditiis autem error eaque rerum omnis culpa repellendus.",
  },
  {
    id: "1234",
    title: "Lorem ipsum dolor sit amet",
    imgLink:
      "https://img.freepik.com/free-photo/soccer-player-action-stadium_1150-14598.jpg?ga=GA1.1.911811244.1711136200&",
    teaser:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates doloremque cumque, magni praesentium dolor accusantium beatae, minima inventore obcaecati quo est ratione blanditiis autem error eaque rerum omnis culpa repellendus.",
  },
  {
    id: "123222",
    title: "Lorem ipsum dolor sit amet",
    imgLink:
      "https://img.freepik.com/free-photo/soccer-player-action-stadium_1150-14598.jpg?ga=GA1.1.911811244.1711136200&",
    teaser:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates doloremque cumque, magni praesentium dolor accusantium beatae, minima inventore obcaecati quo est ratione blanditiis autem error eaque rerum omnis culpa repellendus.",
  },
];

export const HomePageBlog = () => {
  return (
    <div className="flex flex-col gap-1 bg-zinc-200 dark:bg-zinc-800 bg-opacity-60 dark:bg-opacity-50 rounded-md overflow-hidden">
      <p className="text-center pt-4 font-bold">️‍️‍🔥Hot News</p>
      {posts.slice(1).map((post) => (
        <Link to={`/post/${post.id}`} key={post.id}>
          <div className="flex flex-row gap-2 p-3 dark:hover:bg-zinc-800 hover:bg-zinc-200 cursor-pointer transition-colors ease-in-out ">
            <img src={post.imgLink} alt={post.title} className="rounded-md max-h-[100px] w-[70px]" />
            <div className="p-1 mt-1 flex flex-col gap-2">
              <p className="text-xs font-bold leading-4  line-clamp-1">{post.title}</p>
              {/* <p className="text-xs line-clamp-2">{post.teaser}</p> */}
              <p className="text-xs line-clamp-2 opacity-75 font-extralight">22 Styczeń 2024</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
