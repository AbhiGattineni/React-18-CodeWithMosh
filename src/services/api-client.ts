import axios,{CanceledError} from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '07475b09680642a982c574f220fd7b17'
    }
})

export {CanceledError};