import dayjs from "dayjs";
import { FC } from "react";

export const DateDisplay: FC<{ gameDate: Date; format?: string }> = ({ gameDate, format = "DD.MM.YYYY HH:mm" }) => {
  return <>{dayjs(gameDate).format(format)}</>;
};
