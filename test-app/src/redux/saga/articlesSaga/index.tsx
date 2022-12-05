import { all, takeLatest, put, call, select } from 'redux-saga/effects';
import {
  GET_ARTICLES,
  GET_ONE_ARTICLE,
  GET_ARTICLES_WITH_FILTER,
  GET_ARTICLES_WITH_SORT,
  GET_ARTICLES_WITH_PAGE,
  GET_PAGES_COUNT,
} from '../../actions/actions';
import { articlesActionCreators } from '../../actions/articlesActionCreators';
import { AxiosResponse } from 'axios';
import { getArticles, getOneArticle, getPagesCount } from '../../../services/articlesServices';
import { IArticlePost, IArticlesResponsePagesCount } from '../../../types/articlesTypes';
import {
  currentPageArticlesSelector,
  filterArticlesSelector,
  sortArticlesSelector,
} from '../../selectors/articlesSelectors';

function* fetchArticles() {
  try {
    yield put(articlesActionCreators.setArticlesLoading(true));
    const filter: string = yield select(filterArticlesSelector);
    const page: number = yield select(currentPageArticlesSelector);
    const sort: string = yield select(sortArticlesSelector);

    const response: AxiosResponse<IArticlePost[]> = yield call(getArticles, { filter, page, sort });
    if (response.data && response.status === 200) {
      yield put(articlesActionCreators.getArticlesSuccess(response.data));
    }
  } catch (e: any) {
    yield put(articlesActionCreators.getArticlesFailure(e?.response?.data?.detail));
  } finally {
    yield put(articlesActionCreators.setArticlesLoading(false));
  }
}
function* fetchOneArticle({ payload }: ReturnType<typeof articlesActionCreators.getOneArticle>) {
  try {
    yield put(articlesActionCreators.setArticlesLoading(true));

    const response: AxiosResponse<IArticlePost> = yield call(getOneArticle, payload);
    if (response.data && response.status === 200) {
      yield put(articlesActionCreators.getArticleSuccess(response.data));
    }
  } catch (e: any) {
    console.log(e);
    yield put(articlesActionCreators.getArticleFailure(e?.response?.data?.detail));
  } finally {
    yield put(articlesActionCreators.setArticlesLoading(false));
  }
}

function* fetchArticlesWithFilter({ payload }: ReturnType<typeof articlesActionCreators.getArticlesWithFilter>) {
  yield put(articlesActionCreators.setArticlesFilter(payload));

  yield fetchArticles();
}

function* fetchArticlesWithPage({ payload }: ReturnType<typeof articlesActionCreators.getArticlesWithPage>) {
  yield put(articlesActionCreators.setArticlesPage(payload));

  yield fetchArticles();
}

function* fetchArticlesWithSort({ payload }: ReturnType<typeof articlesActionCreators.getArticlesWithSort>) {
  yield put(articlesActionCreators.setArticlesSort(payload));

  yield fetchArticles();
}

function* fetchPagesCount() {
  try {
    yield put(articlesActionCreators.setArticlesLoading(true));

    const response: AxiosResponse<IArticlesResponsePagesCount> = yield call(getPagesCount);
    if (response.data && response.status === 200) {
      yield put(articlesActionCreators.getArticlesPagesCountSuccess(response.data));
    }
  } catch (e: any) {
    yield put(articlesActionCreators.getArticlesFailure(e?.response?.data?.detail));
  } finally {
    yield put(articlesActionCreators.setArticlesLoading(false));
  }
}

export function* watchArticlesSaga() {
  yield all([
    takeLatest(GET_ARTICLES, fetchArticles),
    takeLatest(GET_ONE_ARTICLE, fetchOneArticle),
    takeLatest(GET_ARTICLES_WITH_FILTER, fetchArticlesWithFilter),
    takeLatest(GET_PAGES_COUNT, fetchPagesCount),
    takeLatest(GET_ARTICLES_WITH_PAGE, fetchArticlesWithPage),
    takeLatest(GET_ARTICLES_WITH_SORT, fetchArticlesWithSort),
  ]);
}
