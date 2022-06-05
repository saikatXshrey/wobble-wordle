import axios from "axios";

const getSolution = async () => {
  const { data } = await axios({
    method: "GET",
    url: "https://random-word-api.herokuapp.com/word?length=5",
  });

  return data[0];
};

export default getSolution;
