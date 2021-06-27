import axios from "axios";

export default class cVService {
  getCv(jobSeekerId) {
    return axios.get("http://localhost:8080/api/cvs/findByJobSeekerId?jobSeekerId="+jobSeekerId);
  }

  addEmployer(circullumVitale){
    let result = axios.post("http://localhost:8080/api/cvs/add",circullumVitale)
    return result
  }
}
