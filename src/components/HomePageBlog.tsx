const posts = [
  {
    title: "Lorem ipsum dolor sit amet",
    imgLink:
      "https://img.freepik.com/free-photo/soccer-player-action-stadium_1150-14598.jpg?ga=GA1.1.911811244.1711136200&",
    teaser:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates doloremque cumque, magni praesentium dolor accusantium beatae, minima inventore obcaecati quo est ratione blanditiis autem error eaque rerum omnis culpa repellendus.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    imgLink:
      "https://img.freepik.com/free-photo/soccer-player-action-stadium_1150-14598.jpg?ga=GA1.1.911811244.1711136200&",
    teaser:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates doloremque cumque, magni praesentium dolor accusantium beatae, minima inventore obcaecati quo est ratione blanditiis autem error eaque rerum omnis culpa repellendus.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    imgLink:
      "https://img.freepik.com/free-photo/soccer-player-action-stadium_1150-14598.jpg?ga=GA1.1.911811244.1711136200&",
    teaser:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates doloremque cumque, magni praesentium dolor accusantium beatae, minima inventore obcaecati quo est ratione blanditiis autem error eaque rerum omnis culpa repellendus.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    imgLink:
      "https://img.freepik.com/free-photo/soccer-player-action-stadium_1150-14598.jpg?ga=GA1.1.911811244.1711136200&",
    teaser:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates doloremque cumque, magni praesentium dolor accusantium beatae, minima inventore obcaecati quo est ratione blanditiis autem error eaque rerum omnis culpa repellendus.",
  },
];

export const HomePageBlog = () => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {posts.map((post, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 bg-zinc-800 hover:bg-zinc-700 p-2 rounded-md cursor-pointer transition-colors ease-in-out "
        >
          <img src={post.imgLink} alt={post.title} className="rounded-md" />
          <p className="text-sm font-bold leading-4 line-clamp-2">{post.title}</p>
          <p className="text-xs  line-clamp-2">{post.teaser}</p>
        </div>
      ))}
    </div>
  );
};
