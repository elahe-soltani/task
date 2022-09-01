import {combineReducers} from 'redux' ;
import userReducer from './users/usersReducer';
import postsReducer from './posts/postsreducer';
const rootReducer = combineReducers({
    userState : userReducer ,
    postState: postsReducer
})
export default rootReducer