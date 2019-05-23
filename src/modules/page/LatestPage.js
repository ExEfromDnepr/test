import React,{useState, useEffect} from 'react';
import styled from 'styled-components';

import * as actions from '../redux/actions.js';
import {connect} from 'react-redux';
import LatestTitle from '../components/Latest/LatestTitle.js';
import LatestBody from '../components/Latest/LatestBody.js';

import getPost from '../../api/getPost.js';

function LatestPage({toPostItems, toPostId, toGetListPostSUCCESS, toDispathPostId}, props) {

  const [loadingPost, setLoadingPost] = useState(false);

  /*const data = {
    id: 102,
    title: " Мой Пост2",
    body: "It's possible to integrate your Ghost publication with modern analytics It's possible to integrate your Ghost publication with modern analytics It's possible to integrate your Ghost publication with modern analytics It's possible to integrate your Ghost publication with modern analytics It's possible to integrate your Ghost publication with modern analytics It's possible to integrate your Ghost publication with modern analytics It's possible to integrate your Ghost publication with modern analytics It's possible to integrate your Ghost publication with modern analytics ",
    date: "12/12/1212",
    autor: "ExE2"
  }*/

useEffect(()=>{

    getPost().then((response)=> toGetListPostSUCCESS(response.data)).catch(err => console.log(err));

    if(toPostItems )
      setLoadingPost(true);

},[]);

    if(loadingPost){
      return (
        <LatestPage.Content>
            <LatestTitle />
            <LatestBody toPostItems={toPostItems}  toDispathPostId={toDispathPostId} toPostId={toPostId}/>

        </LatestPage.Content>
      );
    }else{
      return(<div>loading</div>)
    }
 
}

LatestPage.Content =  styled.div`
    width: 100vw;
    height: 100vw;
    display: flex;
    position: fixed;
    background-color: #CCFFFF;
    flex-direction: column;
    border: 1 solid black;
`;

const mapStateToProps = (state)=>({
  toPostItems: state.one.postItems,
  toPostId: state.one.postID
})

const mapDispathToProps = {

  toGetListPostSUCCESS: actions.getListPost,
  toDispathPostId: actions.setPostId
}

export default connect(mapStateToProps, mapDispathToProps)(LatestPage);