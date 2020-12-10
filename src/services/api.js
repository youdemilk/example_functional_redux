import apisauce from "apisauce";

export const GENERAL_HEADERS = {
  "content-type": "application/json",
};
export const TIMEOUT = 5000;

export const create = () => {
  const api = apisauce.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: GENERAL_HEADERS,
    timeout: TIMEOUT,
  });

  const setHeader = (key, value) => {
    return api.setHeader(key, value);
  };

  const getPosts = () => {
    return api.get("posts");
  };

  const getComments = () => {
    return api.get("comments");
  };

  return {
    setHeader,
    getPosts,
    getComments,
  };
};
