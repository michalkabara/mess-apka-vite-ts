import dayjs from "dayjs";

export const DateDisplay: React.FC<{ gameDate: Date; format?: string }> = ({
  gameDate,
  format = "DD.MM.YYYY HH:mm",
}) => {
  return <>{dayjs(gameDate).format(format)}</>;
};
