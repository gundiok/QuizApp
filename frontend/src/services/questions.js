import axios from "axios";

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/questions`;

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export default { getAll };
