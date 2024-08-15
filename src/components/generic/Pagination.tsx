import usePagination from "@mui/material/usePagination/usePagination";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

export const Pagination: React.FC<{
  numberOfPages: number | undefined;
  handleChange: () => void;
  currentPage: number;
}> = ({ numberOfPages, handleChange, currentPage }) => {
  const { items } = usePagination({
    count: numberOfPages,
    onChange: handleChange,
    page: currentPage,
  });

  return (
    <nav>
      <ul className="list-none flex flex-row-reverse gap-1 text-xs items-center">
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                type="button"
                className={`size-6 ${selected ? "rounded-full bg-zinc-50 bg-opacity-10" : ""}`}
                {...item}
              >
                {page}
              </button>
            );
          } else if (type === "next") {
            children = (
              <button type="button" {...item} className="flex items-center text-xl">
                <RxCaretLeft />
              </button>
            );
          } else if (type === "previous") {
            children = (
              <button type="button" {...item} className="flex items-center text-xl">
                <RxCaretRight />
              </button>
            );
          } else {
            children = (
              <button type="button" {...item}>
                {type}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </nav>
  );
};
