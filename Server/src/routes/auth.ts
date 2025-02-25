import {Router} from 'express';
import {logIn, signUp} from '../controllers/auth';
import {newsApi} from "../controllers/newsApiController";
import {getSourcesFromNewsAPI} from "../newsApi/newsApi";
import {isAuthenticated} from "../middlewares/isAuthenticated";



const authRoutes:Router = Router();

authRoutes.post('/signup', signUp);
authRoutes.post('/login', logIn);

authRoutes.get('/newsApi',isAuthenticated, newsApi);
authRoutes.get('/sources',isAuthenticated, getSourcesFromNewsAPI);




export default authRoutes;