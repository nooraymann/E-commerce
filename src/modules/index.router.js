import { categoryRouter } from "./category/category.routes.js";

export default function bootstrap(app,express){
    app.use(express.json())
    app.use("/api/v1/categories",categoryRouter);
}