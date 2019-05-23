import React,{useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import addPost from '../../../api/addPost.js';
import getPost from '../../../api/getPost.js';

const ComponentsBody = (props)=>{

const [ title, setTitle] = useState("");
const [body, setBody] = useState("");
const [autor, setAutor] = useState("");

const onClickPost = (item)=>{

    props.toDispathPostId(item.id);
};

const onChangeTitle =(e)=>{
    setTitle(e.target.value);
};

const onChangeBody = (e)=>{
    setBody(e.target.value);
};

const onChangeAutor = (e)=>{
    setAutor(e.target.value);
};

const onCreate = ()=>{

    const time = new Date();
    const data ={
        title: title,
        body: body,
        date: time.getDay() + "." + time.getMonth() + "." + time.getUTCFullYear(),
        autor: autor
    }
    addPost(data).then(()=> getPost().then((response)=> props.toGetListPostSUCCESS(response.data)).catch(err => console.log(err)));
    
};

    return(
        <ComponentsBody.contentBody>
            {
                props.toPostItems.map((item)=>{
                    if(item.id !== undefined && item.title !== undefined && item.body !== undefined && item.date !== item.autor !== undefined){
                        return(
                            <ComponentsBody.bodyPost onClick={()=> onClickPost(item)} key={item.id}>
                                <ComponentsBody.postTitle >
                                   {item.title}
                                </ComponentsBody.postTitle>
                                <ComponentsBody.postText >
                                    {
                                        item.body.substring(0,400) + "..."

                                    }
                                    <Link to="/viewPost/posts/">View Post</Link>
                                </ComponentsBody.postText>
                                <ComponentsBody.postAutorDate >
                                  Autor: {item.autor} Date: {item.date}
                                </ComponentsBody.postAutorDate>
                            </ComponentsBody.bodyPost>
                        );
                    }
                 return null;
                })
                
                
            }
            <ComponentsBody.bodyInput>
                Title: <input type="text"  onChange = {onChangeTitle} />
                Text: <ComponentsBody.inputText type="text" onChange = {onChangeBody} />
                Autor: <input type="text" onChange={onChangeAutor} />
                <button onClick={onCreate}>Create</button>
            </ComponentsBody.bodyInput>
        </ComponentsBody.contentBody>
    );
};

ComponentsBody.contentBody = styled.div`
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

ComponentsBody.bodyPost = styled.div`
    width: 100%;
    height: 26%;
    padding-left: 1%;
    padding-right: 1%;
    margin-top: 1%;
`;

ComponentsBody.postTitle = styled.div`
    width: 100%;
    height: 20%;
    font-size: 30px;
    font-weight: bold;
    text-align: left;
`;

ComponentsBody.postText = styled.div`
    width: 100%;
    height: 70%;
    font-size:17px;
`;

ComponentsBody.postAutorDate = styled.div`
    width: 100%;
    height: 5%;
    text-align: left;
    font-size: 10px;
    padding-left: 80%;

`;

ComponentsBody.bodyInput = styled.div`
     width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    margin-top: 1%;
`;

ComponentsBody.inputText = styled.input`
    height: 80%;
    width: 100;
`;


export default ComponentsBody;