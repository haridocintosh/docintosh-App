import { HOMESCREEN_DATA } from "../Type/Type";

export const HomeScreenHandle = (response) => {
    console.log("HomeScreenHandle--------------",response);
    return {
        type: HOMESCREEN_DATA,
        payload: response,
    };
};