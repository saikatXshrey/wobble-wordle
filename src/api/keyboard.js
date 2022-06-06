import axios from "axios";

const keyboard = async () => {
  const {
    data: { letters },
  } = await axios({
    method: "GET",
    url: "https://mocki.io/v1/dc9aced7-5fe4-4741-9c28-d13161f86e85",
  });

  return letters;
};

export default keyboard;
