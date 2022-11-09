import { combineReducers } from "redux";
import authReducer from "./authReducer";

const rootReducer = combineReducers( {
    auth : authReducer,
    // articles : articlesReducer,
    // blogs : blogsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer; 