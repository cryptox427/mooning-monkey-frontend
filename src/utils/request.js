import axios from 'axios';

const request = async (method, url, data) => {
    try {
        const res = await axios[method](url, data);
        return {status: "success", result: res.data};
    } catch (error) {
        return {status: "error", result: "Not responding"};
    }
}

export default request;