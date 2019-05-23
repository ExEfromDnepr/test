import axios from 'axios';



export default  (id) => {

    const options = {

        method: 'GET',
        url: "https://simple-blog-api.crew.red/posts/"+ id + "?_embed=comments"

    }

    return  axios(options);

}