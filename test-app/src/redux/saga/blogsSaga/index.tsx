import { all, takeLatest, put, call, select } from 'redux-saga/effects';
import { GET_BLOGS, GET_BLOGS_WITH_FILTER } from '../../actions/actions';
import { blogsActionCreators } from '../../actions/blogsActionCreators';
import { AxiosResponse } from 'axios';
import { getBlogs } from '../../../services/blogsServices';
import { IBlogPost } from '../../../types/blogsTypes';
import { filterBlogsSelector } from '../../selectors/blogsSelectors';


function* fetchBlogs(){
    try{
        yield put(blogsActionCreators.setBlogsLoading(true));
        const filter: string = yield select(filterBlogsSelector);
        
        const response: AxiosResponse<IBlogPost[]> = yield call(getBlogs, { filter });
        if(response.data && response.status === 200){
            yield put(blogsActionCreators.getBlogsSuccess(response.data))
        }
    } catch (e: any) {
        yield put(blogsActionCreators.getBlogsFailure(e?.response?.data?.detail))

    } finally {
       yield put(blogsActionCreators.setBlogsLoading(false)); 
    }
}

function* fetchBlogsWithFilter({ payload }: ReturnType<typeof blogsActionCreators.getBlogsWithFilter>){
    yield put(blogsActionCreators.setBlogsFilter(payload));  
    
    yield fetchBlogs();
   
}


export function* watchBlogsSaga() {
    yield all([takeLatest(GET_BLOGS, fetchBlogs), takeLatest(GET_BLOGS_WITH_FILTER, fetchBlogsWithFilter)])
}