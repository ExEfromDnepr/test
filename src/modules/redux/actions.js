
export  const getListPost = (res)=>({
    type:"GET_LIST_POSTS",
    payload: res
});

export  const getComents = (res)=>({
    type:"GET_COMENTS",
    payload: res
});

export  const setPostId = (res)=>({
    type:"POST_ID",
    payload: res
});

