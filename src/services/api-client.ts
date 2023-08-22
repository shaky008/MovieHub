import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "1b150dce7f8509ba675f68a56212d6b3",
  },
});
