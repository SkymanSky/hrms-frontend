import axios from "axios"

export default class jobPostService{
    getJobPosts(){
        return axios.get("http://localhost:8080/api/jobpositions/getall")
    }

    getJobPostsAsc(){
        return axios.get("http://localhost:8080/api/jobpositions/getallasc")
    }

    getJobPostsDesc(){
        return axios.get("http://localhost:8080/api/jobpositions/getalldesc")
    }
}