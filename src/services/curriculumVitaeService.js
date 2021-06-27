import axios from "axios";

export default class cVService {
  getCv(jobSeekerId) {
    return axios.get("http://localhost:8080/api/cvs/findByJobSeekerId?jobSeekerId="+jobSeekerId);
  }
}
