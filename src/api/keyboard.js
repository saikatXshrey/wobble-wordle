import axios from "axios";

const keyboard = async () => {
  const {
    data: { letters },
  } = await axios({
    method: "GET",
    url: "https://mocki.io/v1/07f78eb4-ab37-478b-81ea-5ff9a658fbb6",
  });

  return letters;
};

export default keyboard;
