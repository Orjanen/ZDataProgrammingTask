import axios, {AxiosResponse} from 'axios'
import {IPaymentPlanItem} from "../models/paymentPlanItem";

axios.defaults.baseURL = '/api'

const responseBody = (response: AxiosResponse) => response.data

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody)
};

const Loan = {
    getDifferentLoanTypes: () => requests.get('/loan'),
    getPaymentPlan: (formData: any): Promise<IPaymentPlanItem []> => requests.post('/loan', formData),
}

export default {
    Loan
}