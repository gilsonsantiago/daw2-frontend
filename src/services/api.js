import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:1337/api"
});

export const createTarefa = async (tarefaData) => {
    return await api.post("/jobs", tarefaData);
}

export const readTarefa = async () => {
    return await api.get("/jobs");
}


export default {
    createTarefa,
    readTarefa
};