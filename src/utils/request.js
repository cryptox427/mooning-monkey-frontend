import axios from 'axios';

const request = async (method, url, data) => {
    try {
        const res = await axios[method](url, data);
        return {status: "success", result: res.data};
    } catch (error) {
        return {status: "error", result: "Not responding"};
    }
};

const postRequest = async (url, data) => {
    try {
        //axios.defaults.withCredentials = true;
        axios.defaults.crossDomain = true;
        console.log(JSON.stringify(data));
        const res = await axios.post(url, {
                data: data,
                type: 'products'
            });
            console.log("res:", res);
            return res;
    } catch (error) {
        return {status: "error", result: "Not responding"};
    }
};

export { request, postRequest };