import {Router} from 'express';
import {newsApi} from "../controllers/newsApiController";
import {isAuthenticated} from "../middlewares/isAuthenticated";



const newsRoutes:Router = Router();

newsRoutes.get('/newsApi',isAuthenticated, newsApi);



export default newsRoutes;