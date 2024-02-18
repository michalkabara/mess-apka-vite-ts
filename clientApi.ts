export const fetchData = async (fetchUrl: RequestInfo | URL) => {
  const r = await fetch(fetchUrl);
  const data = await r.json();
  return data;
};
