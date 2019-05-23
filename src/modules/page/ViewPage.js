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

    useEffect(()=>{

        getComentsApi(toPostId).then((response)=> toGetComentsSUCCESS(response.data.comments)).catch(err => console.log(err));
        getPostApi().then((response)=> toGetListPostSUCCESS(response.data))
        .catch(err => console.log(err));

        if( toComents){
            setLoading(true);
        }
            
    },[]);

    if(loading){
        return(
            <ViewPage.content>
                <ViewTitle />
                <ViewBody toPost={toPost} toComents={toComents} toPostId={toPostId} toGetListPostSUCCESS={toGetListPostSUCCESS} toGetComentsSUCCESS={toGetComentsSUCCESS} setLoading ={setLoading}/>
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