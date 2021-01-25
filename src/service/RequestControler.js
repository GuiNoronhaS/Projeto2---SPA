import axios from 'axios';

const BASE_URL = "http://localhost:3002/processo";
class RequestControler {

    inserirProcesso(objProcesso) {
        return axios.post(BASE_URL, objProcesso)
            .catch(error => {
                throw error;
            })
    }
    buscarAssunto(assunto) {
        return axios.get(`${BASE_URL}?q=${assunto}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
    }
    buscarPorID(id) {
        return axios.get(`${BASE_URL}/${id}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
    }
    deletarProcesso(id) {
        return axios.delete(`${BASE_URL}/${id}`)
            .catch(error => {
                throw error;
            })
    }
}

export default new RequestControler();