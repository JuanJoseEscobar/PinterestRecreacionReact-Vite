const getImageAPI =  async(URLAPI) => {
    const URL = `${URLAPI}`;
    const resp = await fetch(URL);

  return resp.url;
}

export default getImageAPI