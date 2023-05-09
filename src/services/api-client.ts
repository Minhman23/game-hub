import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4e96f3969d424eaa8a6ded8ecac45ce6",
  },
});
