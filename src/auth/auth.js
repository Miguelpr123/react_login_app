import api, { setCookie } from '../api/base'
import { toast } from 'sonner'


export const login = async (email, password) => {
    try {
        const response = await api.post('/auth/login', { email, password });
        if (response.status == 201 ){
            setCookie('accessToken' , response.data['access_token'] )            
        }
        return response.data;
    } catch (error) {
        if( error.status == 500 ){
            toast.error('Network error')
        }else if( error.status == 401 ){
            toast.error('Invalid Credentials')
        }
        throw new Error('Login failed');
    }
};


export const profile = async () => {
    try {
        const response = await api.get('/auth/profile');
        response.data;
    } catch (error) {
        throw new Error('Load profile failed');
    }
};