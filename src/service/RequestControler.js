import React from 'react';
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
        return axios.get(`${Base_URL}?q=${assunto}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
    }
    buscarPorID(id) {
        return axios.get(`${Base_URL}/${id}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
    }
    deletarProcesso(id) {
        return axios.delete(`${Base_URL}/${id}`)
            .catch(error => {
                throw error;
            })
    }
}

export default new FilmeService();