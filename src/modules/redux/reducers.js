
const initialTitle = {postItems: [],  postID: 1 , coments: []};

function MyReducer(state= initialTitle, actions){
    switch(actions.type){
        case 'GET_LIST_POSTS': return {...state, postItems: actions.payload};
        case 'GET_COMENTS': return {...state, coments: actions.payload};
        case 'POST_ID': return {...state, postID: actions.payload};
      default: return  state
    }
}

export default MyReducer;