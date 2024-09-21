import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:1337/api"
});

export const createTarefa = async (tarefaData) => {
    return await api.post("/jobs", tarefaData);
}

export const readTarefa = async () => {
    return await api.get("/jobs");
}

export const login = async (loginData) => {
    return await api.post("/auth/local", loginData);
}


export default api;

/*

const api = axios.create({
    baseURL: "http://localhost:1337/api"
});

export async function createTarefa(tarefaData){
    return await axios.post("/jobs", tarefaData);
};

export async function readTarefa() {
    return await api.get("/jobs");
};

export async function login(loginData){
    return await api.post("/auth/local", loginData);
};

*/