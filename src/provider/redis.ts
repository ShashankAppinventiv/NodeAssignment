import {createClient} from 'redis'


export const redisClient=createClient();//{url if redis is present in remote server}
