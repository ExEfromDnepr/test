import React,{useState} from 'react';
import styled from 'styled-components';

import addComents from '../../../api/addComents.js';
import getComentsApi from '../../../api/getComenst.js';

const ViewBody = (props)=>{
    const [userName, setUserName] = useState('none');
    const [message, setMessage] = useState('none');



    const onClickCreate = ()=>{

        const data = {
            postId: props.toPostId,
            userName: userName,
            body: message
        }
        addComents(data).then(()=> getComentsApi(props.toPostId).then((response)=> props.toGetComentsSUCCESS(response.data.comments)).catch(err => console.log(err)));




        console.log(props.toPost);
        console.log(props.toComents);
    };

    const onChangeName = (e) =>{
        setUserName(e.target.value);
    };

    const onChangemessage = (e)=>{
        setMessage(e.target.value);
    };

    return(
        <ViewBody.contentBody>
            {
                props.toPost.map((item)=>{
                    if(item.id === props.toPostId){
                        return(
                            <div key={item.id}>
                                <ViewBody.bodyTitle>
                                    {item.title}
                                </ViewBody.bodyTitle>
                                <ViewBody.bodyText>
                                    {item.body}
                                </ViewBody.bodyText>
                                <ViewBody.bodyAutorDate>
                                    Autor: {item.autor} Date: {item.date}
                                </ViewBody.bodyAutorDate>
                                {
                                   props.toComents.map((item)=> {
                                        if(item.postId !== undefined && item.postId === props.toPostId && props.toComents !== undefined){
                                            return(
                                                <ViewBody.bodyComents key={item.id}>
                                                    <p>Name: {item.userName}</p>
                                                    <p>{item.body}</p>
                                                </ViewBody.bodyComents>
                                            );
                                        }
                                     return null;
                                    })
                                }
                            <ViewBody.bodyInputData>
                             UserName: <input type="text" onChange={onChangeName} />
                             Message:<input type="text" onChange={onChangemessage} />
                            <button onClick={onClickCreate}>Create</button>
                            </ViewBody.bodyInputData>
                            </div>
                        );
                    }
                return null;
                })
                
            }
            
        </ViewBody.contentBody>
    );
};

ViewBody.contentBody = styled.div`
     width:60%;
    height:46%;
    overflow: scroll;
    background-color: white;
    margin-top: 0.5%;
    margin-left: 20%;
    margin-right: 20%;
    padding-left: 1%;
    padding-right: 1%;

    ::-webkit-scrollbar { 
         width: 0;
         height: 0; 
    }
`;

ViewBody.bodyTitle = styled.h1`
    width:100%;
    max-height: auto;
    min-height: auto;
`;

ViewBody.bodyText = styled.h1`
    width:100%;
    max-height: auto;
    min-height: auto;
`;

ViewBody.bodyAutorDate = styled.h1`
    width:100%;
    border-bottom: 2px solid black;
    text-align: right;
    font-size: 10px;
    max-height: auto;
    min-height: auto;
`;
ViewBody.bodyComents = styled.div`
    width: 100%;
    height: 40%;
    padding-left: 3%; 
`;

ViewBody.bodyInputData = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
`;

export default ViewBody;