import { FC } from "react";

export const BlogPost: FC<{ postImg: string; postTitle: string; postText: string }> = ({
  postImg,
  postTitle,
  postText,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <img
        className="w-full h-56 rounded-xl object-cover"
        src={
          postImg ||
          "https://img.freepik.com/free-photo/soccer-player-action-stadium_1150-14598.jpg?ga=GA1.1.911811244.1711136200&"
        }
        alt={postTitle}
      />
      <h1 className="font-bold text-xl">Lorem ipsum dolor sit amet</h1>
      <p className="text-justify text-sm">
        {postText ||
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates doloremque cumque, magni praesentium dolor accusantium beatae, minima inventore obcaecati quo est ratione blanditiis autem error eaque rerum omnis culpa repellendus."}
      </p>
    </div>
  );
};
