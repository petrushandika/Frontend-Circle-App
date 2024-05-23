import axios from "axios";

export const getProducts = () => {
  axios
    .get("https://www.npoint.io/docs/9aa6ebf8cfa4ab9b534f")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
