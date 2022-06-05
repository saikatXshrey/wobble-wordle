import axios from "axios";

const keyboard = async () => {
  const { data } = await axios({
    method: "GET",
    url: "http://localhost:4000/letters",
  });

  return data;
};

export default keyboard;
