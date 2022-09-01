import axios from 'axios'

export class HttpClient{
 baseUrl;
 
 constructor(url){
  this.baseUrl = url;
 }

 async get(endpoint){
     return await axios.get(`${this.baseUrl}/${endpoint}`);
 }
 async get(endpoint,id){
    return await axios.get(`${this.baseUrl}/${endpoint}`,id);
}
 async post(endpoint,body){
    return await axios.post(`${this.baseUrl}/${endpoint}`,body);
}
async put(endpoint,body,id){
    return await axios.put(`${this.baseUrl}/${endpoint}`,body,id);
}
async patch(endpoint,body,id){
    return await axios.patch(`${this.baseUrl}/${endpoint}`,body,id);
}
async delete(endpoint,id){
    return await axios.delete(`${this.baseUrl}/${endpoint}`,id);
}


}