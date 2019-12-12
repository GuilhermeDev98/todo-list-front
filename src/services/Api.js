import axios from 'axios'

const API_VERSION = process.env.API_VERSION || 'v1'

export default axios.create({
    baseURL: `https://todoapp-back.herokuapp.com/api/${API_VERSION}/`
})