import { combineReducers } from "redux";
import authReducer from "./authReducer";
import blogsReducer from "./blogsReducer";

const rootReducer = combineReducers( {
    auth : authReducer,
    blogs : blogsReducer,
    // articles : articlesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer; 