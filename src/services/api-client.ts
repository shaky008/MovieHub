import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    //api_key: YOUR API KEY HERE ,
  },
});
