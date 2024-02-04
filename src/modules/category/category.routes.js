import express from 'express'
import * as categoryController from './category.controller.js';
let categoryRouter=express.Router();
categoryRouter.route("/")
.get(categoryController.getAllCategories)
.post(categoryController.addCategory)

categoryRouter.route("/:id")
.get(categoryController.getCategory)
.put(categoryController.updateCategory)
.delete(categoryController.deleteCategory);
export {categoryRouter}