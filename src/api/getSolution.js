import axios from "axios";

const getSolution = async () => {
  const { data } = await axios({
    method: "GET",
    url: "http://localhost:4000/solutions",
  });

  return data;
};

export default getSolution;
