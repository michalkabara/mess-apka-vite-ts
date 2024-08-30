import { createContext, useState } from "react";
import blogImg1 from "../img/post1.jpg";

//types
export interface Post {
  id: string;
  title: string;
  imgSrc: HTMLImageElement;
  date: string;
  content: string;
}

export interface BlogContextType {
  blogPosts: Post[];
  setBlogPosts: (newState: Post[]) => void;
}

//context
export const BlogContext = createContext<BlogContextType>({
  blogPosts: [],
  setBlogPosts: () => {},
});

//context provider
export const BlogContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: "1236",
      title: "🔥 HotScore ruszył",
      imgSrc: blogImg1,
      date: "22 Styczeń 2024",
      content:
        "Piłka nożna to nie tylko Ekstraklasa i największe europejskie ligi. Prawdziwe emocje często rozgrywają się na lokalnych boiskach, gdzie drużyny rywalizują o każdy punkt, każdą bramkę i każdy awans. Właśnie z myślą o tych pasjonujących rozgrywkach stworzyliśmy nową platformę, która dostarczy Wam najświeższe informacje prosto z murawy! Dzięki naszej platformie te emocje są teraz na wyciągnięcie ręki. Możesz śledzić wyniki, statystyki, oglądać zdjęcia i wideo oraz dołączyć do grona kibiców, którzy dzielą się swoimi wrażeniami. To doskonały sposób na to, by być na bieżąco z tym, co dzieje się w lokalnym futbolu. Nie czekaj – dołącz do nas już dziś i zanurz się w świecie lokalnego futbolu na najwyższym poziomie. Razem kibicujmy drużynom, które z pełnym zaangażowaniem walczą na boiskach niższych lig 🔥",
    },
  ]);

  return <BlogContext.Provider value={{ blogPosts, setBlogPosts }}>{children}</BlogContext.Provider>;
};
