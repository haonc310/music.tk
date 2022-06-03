import axiosClient from "./axios-client"


const nameMusicApi = {
    search: (search: string) => {
       
        return axiosClient.get('/search', {
            params:{
                query: search
            }
        })
    }
}
export default nameMusicApi