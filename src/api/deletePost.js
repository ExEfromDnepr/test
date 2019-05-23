import axios from 'axios';

export default (data) => {

    const options = {
        
        method: 'DELETE',
        url:"https://simple-blog-api.crew.red/posts/68",
    }

    return axios(options);

}