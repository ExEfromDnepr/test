import axios from 'axios';



export default  () => {

    const options = {

        method: 'GET',
        url: "https://simple-blog-api.crew.red/posts/1?_embed=comments"

    }

    return  axios(options);

}