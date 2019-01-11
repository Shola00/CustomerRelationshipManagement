import { getCategoryWithContact, addNewCategory, getCategoryByID, updateCategory, deleteCategory } from "../controllers/categoryController";

const categoryRoute = app => {
	app
		.route("/category")
		.get((req, res, next) => {
			console.log(`Request from ${req.originalUrl} `);
			console.log(`Request type ${req.method} `);
			next();
		}, getCategoryWithContact)
		.post(addNewCategory);

	app
		.route("/category/:categoryId")
		.get(getCategoryByID)
		.put(updateCategory)
		.delete(deleteCategory);
};

export default categoryRoute;