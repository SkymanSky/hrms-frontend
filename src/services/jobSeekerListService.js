import axios from "axios"

export default class jobSeekerListService{
    getJobSeekers(){
        return axios.get("http://localhost:8080/api/jobseekers/getall")
    }
}