import axios from "axios"

export default class jobPostService{
    getJobPosts(){
        return axios.get("http://localhost:8080/api/jobpositions/getbystatus?jobPostingStatus=true")
    }

    getJobPostsForActivation(){
        return axios.get("http://localhost:8080/api/jobpositions/getall")
    }

    getJobPostsAsc(){
        return axios.get("http://localhost:8080/api/jobpositions/getallactiveasc")
    }

    getJobPostsDesc(){
        return axios.get("http://localhost:8080/api/jobpositions/getallactivedesc")
    }

    getJobPostsByCompany(userId){
        return axios.get("http://localhost:8080/api/jobpositions/getbyuseridstatusactive?userId="+userId)
    }

    addJobPost(jobPost){
        let result = axios.post("http://localhost:8080/api/jobpositions/add",jobPost)
        return result
    }

    jobPostChangeStatus(jobPost){
        let result = axios.post("http://localhost:8080/api/jobpositions/updateJobPostingStatusToInactive?id="+jobPost.id)
        return result
    }
}
