export const fetchData = async (fetchUrl: RequestInfo | URL) => {
  try {
    const r = await fetch(fetchUrl);
    const data = await r.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
