import { API } from "../../constants";
import axiosInstance from "./axios";

export const getQuizzesFromApi = async () => {
    try {
        const response = await axiosInstance.get(API.ENDPOINTS.QUIZ);
        return response.data;
    }
    catch (error) {
        return error;
    }
}
