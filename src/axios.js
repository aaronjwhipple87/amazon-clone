import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-clone-c91ab.cloudfunctions.net/api'
  // local
  // 'http://localhost:5001/clone-c91ab/us-central1/api'
});

export default instance;