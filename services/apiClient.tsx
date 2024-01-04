import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiPort = process.env.NEXT_PUBLIC_API_PORT;

export const ApiClient = axios.create({
    baseURL: `${apiUrl}:${apiPort}/`,
    timeout: 5000,
    headers: {
        'X-Custom-Header': 'foobar',
    }
});


