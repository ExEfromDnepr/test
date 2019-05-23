import axios from 'axios';

export default (data) => {

    const options = {
        
        method: 'POST',
        url:"https://simple-blog-api.crew.red/posts",
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)

    }

    return axios(options);

}