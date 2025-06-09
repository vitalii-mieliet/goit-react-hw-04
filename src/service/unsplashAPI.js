import axios from "axios";

const unsplashAPI = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID ive54yF3GmSvrYCTdGOz4YvQLscs49Fm6BGsa0_VWIE",
  },
});

export async function fetchData(query = "", page = 1) {
  const params = {
    query,
    page,
    per_page: 25,
  };

  const { data } = await unsplashAPI.get(`search/photos/`, {
    params,
  });
  return data;
}

// const ACCESS_KEY = "ive54yF3GmSvrYCTdGOz4YvQLscs49Fm6BGsa0_VWIE";
// const params = {
//   query: "office",
//   page: 1,
// };

// export async function fetchImages() {
//   const response = await axios(
//     `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`,
//     {
//       params,
//     }
//   );
//   console.log(response);
// }
