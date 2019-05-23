import axios from 'axios';



export default  () => {

    const options = {

        method: 'GET',
        url: "https://simple-blog-api.crew.red/posts"

    }

    return  axios(options);

}