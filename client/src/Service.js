import axios from 'axios'

const restAPI = `https://newsapi.org/v2/top-headlines?q=trump`

class Service {

    testAPI(){
        return axios.get(restAPI,{
            headers:{
                'Authorization': `${process.env.REACT_APP_APIKEY}`
            }
        })
    }

    onlyKeyword(){

    }

    onlyDate(){

    }

    onlyLanguage(){

    }

    onlyPublisher(){

    }
}

export default new Service();