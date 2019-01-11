import mongoose from "mongoose";
import { CategorySchema } from "../models/categoryModel";

const Category = mongoose.model("Category", CategorySchema);

export const addNewCategory = (req, res) => {
	let newCategory = new Category( req.body );

	newCategory.save((err, category) => {
		if (err) res.send(err);
		newCategory.addContact(req.body.contact_id).then((category) => {
            return res.send(category)
        })
	})
};

export const getCategoryWithContact = (req, res) => {
	Category.find({})
		.populate('contacts')
		.exec((err, category) => {
		if (err) res.send(err);
		res.send(category);
	});
};

export const getCategoryByID = (req, res) => {
	Category.findById(req.params.categoryId, (err, category) => {
		if(err) res.send(err);
		res.send(category);
	});
};

export const updateCategory = (req, res) => {
	Category.findOneAndUpdate(
	 {_id: req.params.categoryId},
	 req.body,
	 { new: true },
	 (err, category) => {
		if (err) res.send(err);
		category.addContact(req.body.contact_id).then((category) => {
            return res.send(category)
        })
	});
};

export const deleteCategory = (req, res) => {
	Category.remove({ _id: req.params.categoryId }, (err) => {
		if(err) res.send(err);
		res.json({ message: 'successfully deleted category' })
	});
};