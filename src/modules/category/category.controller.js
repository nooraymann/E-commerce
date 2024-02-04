import slugify from "slugify";
import { categoryModel } from "../../../database/models/category.model.js"

const addCategory = async (req, res, next) => {
    let { name, image } = req.body;
    let category = new categoryModel({ name, image });
    category.slug = slugify(name);
    await category.save();
    res.json({ message: "Success", category });
}
const updateCategory = async (req, res, next) => {
    req.body.name ? req.body.slug = slugify(req.body.name) : "";
    let { name, image, slug } = req.body;
    let category = await categoryModel.findByIdAndUpdate(req.params.id, { name, image, slug }, { new: true });
    //to enhance performance i used logical operators instead of if condition
    !category&& res.status(404).json("category not found");
    category&&res.json({ message: "success", category });
 
}
const deleteCategory = async (req, res, next) => {
    let category = await categoryModel.findByIdAndDelete(req.params.id, { new: true });
    !category&& res.status(404).json("category not found");
    category&&res.json({ message: "success", category });
}
const getCategory = async (req, res, next) => {
    let category = await categoryModel.findById(req.params.id);
    !category&& res.status(404).json("category not found");
    category&&res.json({ message: "success", category });

}
const getAllCategories = async (req, res, next) => {
    let categories = await categoryModel.find();
    res.json({ message: "success", categories });
}
export {
    addCategory, updateCategory, deleteCategory, getAllCategories, getCategory
}