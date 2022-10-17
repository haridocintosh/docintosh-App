import { HOMESCREEN_DATA } from "../Type/Type";

const initialState = {
    homescreenData : undefined,
};

const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case HOMESCREEN_DATA:
            return {
                ...state,
                homescreenData: payload,
            };
        default: return state;
    }
}

export default UserReducer;