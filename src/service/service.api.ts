import axios, { Axios } from 'axios';

export default class Service {
    public service: Axios;

    constructor(){
        this.service = axios.create({
            baseURL: process.env.REACT_APP_HOST_PRD, 
        })
    }
}