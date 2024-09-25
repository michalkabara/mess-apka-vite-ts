import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface ContactForm {
  name: string;
  email: string;
  message: string;
  "recaptcha-token": string;
}

const updateData = async (url: string, payload: ContactForm) => {
  try {
    return axios.post(url, payload);
  } catch (error) {
    console.log(error);
  }
};

export const useSendContactForm = () => {
  return useMutation({
    mutationFn: (data: ContactForm) => updateData(`${import.meta.env.VITE_API_URL}/api/Contact`, data),
  });
};
