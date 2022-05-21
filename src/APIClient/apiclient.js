import axios from "axios";

const baseUrl = 'https://ananyamahato03.pythonanywhere.com/';

export const getCompanies = async () => {
    const res = await axios.get(baseUrl + 'companies/')
    return res
}

export const getFinances = async () => {
    const res = await axios.get(baseUrl + 'finances/')
    return res
}
