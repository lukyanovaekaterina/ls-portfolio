import axios from "axios";

const token = localStorage.getItem("token");

if (!token) console.warn("Отсутствует токен")

const requests = axios.create({
  baseURL: "https://webdev-api.loftschool.com/",
  headers:{
    "Autorization": 'Bearer ${token}'
  }
});

export default requests;