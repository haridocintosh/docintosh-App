import axios from "axios";
import { mainApi } from "./apis/constant";



export const GetQuizQuestions = () => {
    const homeScreenUrl = `${mainApi.baseUrl}/ApiController/getQuizQuestions`;
    const result = axios.get(homeScreenUrl).then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
    return result;
};


export const PostHomeScreenData = (data) => {
    const homeScreenUrl = `${mainApi.baseUrl}/ApiController/getPost`;
    const result = axios.post(homeScreenUrl, data)
        .then((homeScreenResponse) => {
            return homeScreenResponse.data
        })
        .catch((error) => {
            return error;
        })
    return result;
};