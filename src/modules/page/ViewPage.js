import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import * as actions from '../redux/actions.js';
import ViewTitle from '../components/View/ViewTitle.js';
import ViewBody from '../components/View/ViewBody.js';

import getPostApi from '../../api/getPost.js';
import getComentsApi from '../../api/getComenst.js';
/*import addComents from '../../api/addComents.js';*/


const ViewPage = ({toPost, toComents,toPostId, toGetListPostSUCCESS, toGetComentsSUCCESS}, props)=>{

    const [loading, setLoading] = useState(false);
    /*const data ={
        postId:102,
        userName: "Вася",
        body: "Хуета ваш код"
    };*/

    useEffect(()=>{

        getComentsApi().then((response)=> toGetComentsSUCCESS(response.data.comments)).catch(err => console.log(err));
        getPostApi().then((response)=> toGetListPostSUCCESS(response.data))
        .catch(err => console.log(err));
        
        if( toComents){
            setLoading(true);
            console.log("coment",toComents);
            console.log("Post",toPost);
            console.log(toPostId);
        }
            
    },[]);

    if(loading){
        return(
            <ViewPage.content>
                <ViewTitle />
                <ViewBody toPost={toPost} toComents={toComents} toPostId={toPostId}/>
            </ViewPage.content>
        )
    }else{
       return <div>Loading</div>
    }
}

ViewPage.content =  styled.div`
    width: 100vw;
    height: 100vw;
    display: flex;
    position: fixed;
    background-color: #CCFFFF;
    flex-direction: column;
    border: 1 solid black;
`;

const mapStateToProps = (state) => ({
    toPost: state.one.postItems,
    toPostId: state.one.postID,
    toComents: state.one.coments
});

const mapDispathToProps = {
    toGetListPostSUCCESS: actions.getListPost,
    toGetComentsSUCCESS: actions.getComents
};

export default connect(mapStateToProps, mapDispathToProps) (ViewPage);