// const parser = new DOMParser();
// const parsedLabel = parser.parseFromString(field.label, "text/html");

import PageTitle from "../generic/PageTitle";
import post1Img from "../../img/post1.jpg";

export const BlogPost: React.FC<{ postImg?: string; postTitle?: string; postText?: string }> = ({
  postImg,
  postTitle,
  postText,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <PageTitle title={`HotScore - 🔥 HotScore ruszył`} />

      <img className="w-full h-56 rounded-xl object-cover" src={postImg || post1Img} alt={postTitle} />
      <h1 className="font-semibold text-white text-xl">🔥 HotScore ruszył</h1>
      <div className="text-justify text-xs leading-6">
        <p>
          Piłka nożna to nie tylko Ekstraklasa i największe europejskie ligi. Prawdziwe emocje często rozgrywają się na
          lokalnych boiskach, gdzie drużyny rywalizują o każdy punkt, każdą bramkę i każdy awans. Właśnie z myślą o tych
          pasjonujących rozgrywkach stworzyliśmy nową platformę, która dostarczy Wam najświeższe informacje prosto z
          murawy!
        </p>
        <p className="mt-4">
          Dzięki naszej platformie te emocje są teraz na wyciągnięcie ręki. Możesz śledzić wyniki, statystyki, oglądać
          zdjęcia i wideo oraz dołączyć do grona kibiców, którzy dzielą się swoimi wrażeniami. To doskonały sposób na
          to, by być na bieżąco z tym, co dzieje się w lokalnym futbolu.
        </p>

        <p className="mt-4">
          Nie czekaj – dołącz do nas już dziś i zanurz się w świecie lokalnego futbolu na najwyższym poziomie. Razem
          kibicujmy drużynom, które z pełnym zaangażowaniem walczą na boiskach niższych lig 🔥
        </p>
      </div>
    </div>
  );
};
