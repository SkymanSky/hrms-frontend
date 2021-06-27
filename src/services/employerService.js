import axios from "axios";

export default class employerService{
    getEmployers(){
       return axios.get("http://localhost:8080/api/employers/getall")
    }

    addEmployer(employer){
        let result = axios.post("http://localhost:8080/api/employers/add",employer)
        return result
    }
}