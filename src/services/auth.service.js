import axios from "axios";
import { toast } from "sonner";

export const register = async (data) => {
  try {
    const hasil = await axios.post("http://localhost:3000/api/users", data);
    console.log(hasil);
    return hasil;
  } catch (e) {
    toast.error(e.response.data.errors);
  }
};

export const login = async (data) => {
  try {
    const result = await axios.post(
      "http://localhost:3000/api/users/login",
      data,
      { withCredentials: true }
    );
    return result;
  } catch (e) {
    toast.error(e.response.data.errors);
  }
};

export const deleteAnswer = async () => {
  try {
    const result = await axios.delete("http://localhost:3000/api/quiz/test", {
      withCredentials: true,
    });
    return result;
  } catch (e) {
    toast.error(e.response.data.errors);
  }
};

export const logout = async () => {
  try {
    const result = await axios.delete(
      "http://localhost:3000/api/quiz/profile/logout",
      {
        withCredentials: true,
      }
    );
    return result;
  } catch (e) {
    toast.error(e.response.data.errors);
  }
};
