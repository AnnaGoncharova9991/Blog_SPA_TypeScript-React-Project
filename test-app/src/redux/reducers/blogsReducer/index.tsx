import { IBlogPost } from '../../../types/blogsTypes'
import { BLOGS_LOADING, GET_BLOGS_SUCCESS, GET_BLOGS_FAILURE, SET_BLOGS_FILTER } from '../../actions/actions'

interface IInitialBlogsPage {
    blogs: IBlogPost[],
    isLoading: boolean,
    error: null | string,
    filter: string,
    currentPage: number,
    pageCount: number
}

const initialState: IInitialBlogsPage = {
    blogs: [],
    isLoading: false,
    error: null,
    filter: '',
    currentPage: 1,
    pageCount: 0

}


const blogsReducer = (state = initialState, action: any) => {
    switch (action.type){
        case BLOGS_LOADING:
            return { ...state, isLoading: action.payload};
        case GET_BLOGS_SUCCESS:
            return { ...state, blogs: [...action.payload], error: null, currentPage: 1 };
        case GET_BLOGS_FAILURE:
            return { ...state, error: action.payload };
        case SET_BLOGS_FILTER:
            return { ...state, filter: action.payload };       

    }
    return state
}

export default blogsReducer;