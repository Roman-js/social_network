import * as axios from "axios";



const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': '0c05e3f5-1bb0-4c63-a612-ce4b6957f3bd'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'

});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=>{return response.data})
    },
    follow (UserId){
        return instance.post(`follow/${UserId}`)
            .then(response=>{return response.data})
    },

    unfollow (UserId){
        return instance.delete(`follow/${UserId}`)
            .then(response=>{return response.data})
    },

    pageOfUser(UserId) {
     return instance.get(`profile/${UserId}`)
         .then(response => {return response.data})

 },

    login (){
        return instance.get(`auth/me`)
            .then(response => {
                    //let {email, id, login} = response.data.data;
                    return (response.data);
            })
    }
}

