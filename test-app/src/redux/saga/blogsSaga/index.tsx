import { all, takeLatest, put, call } from 'redux-saga/effects';
import { GET_BLOGS } from '../../actions/actions';
import { blogsActionCreators } from '../../actions/blogsActionCreators';
import { AxiosResponse } from 'axios';
import { getBlogs } from '../../../services/blogsServices';
import { IBlogPost } from '../../../types/blogsTypes';


function* fetchBlogs(){
    try{
        yield put(blogsActionCreators.setBlogsLoading(true));
        
        const response: AxiosResponse<IBlogPost[]> = yield call(getBlogs)
        if(response.data && response.status === 200){
            yield put(blogsActionCreators.getBlogsSuccess(response.data))
        }
    } catch (e: any) {
        yield put(blogsActionCreators.getBlogsFailure(e?.response?.data?.detail))

    } finally {
       yield put(blogsActionCreators.setBlogsLoading(false)); 
    }
}

export function* watchBlogsSaga() {
    yield all([takeLatest(GET_BLOGS, fetchBlogs)])
}