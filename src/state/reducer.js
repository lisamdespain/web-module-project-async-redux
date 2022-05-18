import * as types from './action-types'

const initialState = [];

function movies(moviesState = initialState, action){
    switch (action.type){
        case types.GET_MOVIE_INFO: {
            return [...moviesState, action.payload]
        }
        default:
            return moviesState;
    }

}
export default movies;