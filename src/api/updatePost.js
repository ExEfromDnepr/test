import axios from 'axios';

export default (data) => {

    const options = {
        
        method: 'PUT',
        url:"https://simple-blog-api.crew.red/posts/66",
        header: "Content-Type: application/json",
        data:{
            update: "я не закончил с тобой"
        }
    }

    return axios(options);

}