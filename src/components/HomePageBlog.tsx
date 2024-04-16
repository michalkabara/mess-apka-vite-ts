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
    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3">
      {posts.map((post) => (
        <Link to={`/post/${post.id}`} key={post.id}>
          <div className="flex flex-col gap-2 bg-zinc-800 hover:bg-zinc-700 p-2 rounded-md cursor-pointer transition-colors ease-in-out ">
            <img src={post.imgLink} alt={post.title} className="rounded-md" />
            <p className="text-sm font-bold leading-4 line-clamp-2">{post.title}</p>
            <p className="text-xs  line-clamp-2">{post.teaser}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
