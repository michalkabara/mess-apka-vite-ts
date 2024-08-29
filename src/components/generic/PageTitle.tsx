import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle: React.FC<{ title: string }> = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [location, title]);

  return null;
};

export default PageTitle;
