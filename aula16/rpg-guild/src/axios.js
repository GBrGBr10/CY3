import axios from "axios";

//Geração da instância com o comando create()

const requester = axios.create({
    baseURL : 'http://localhost:8000',
});

export default requester;