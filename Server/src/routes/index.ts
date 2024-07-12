import {Router} from "express";
import authRoutes from "./auth";
import newsRoutes from "./newsRoutes";

const rootRouter:Router = Router();

rootRouter.use('/auth', authRoutes);
rootRouter.use('/news', newsRoutes);

export default rootRouter;