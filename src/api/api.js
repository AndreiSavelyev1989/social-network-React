import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': '220bdf80-2872-448f-a092-ae1a83bfee91' }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)},

    unfollow(userId){
        return instance.delete(`follow/${userId}`).then(response => response.data)},

    follow(userId){
        return instance.post(`follow/${userId}`).then(response => response.data)},
    
    getProfile(userId){
        return  instance.get(`profile/${userId}`).then(response => response.data)},
}


export const authAPI = {
    
    getAuthMe(){
        return  instance.get(`auth/me`).then(response => response.data)},

}