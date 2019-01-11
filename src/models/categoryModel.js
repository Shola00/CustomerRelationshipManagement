import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const CategorySchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
	},
	contacts: [{ 
		type: Schema.Types.ObjectId,
		ref: 'Contact' }]
});

CategorySchema.methods.addContact = function(c) {
    this.contacts.push(c)
    return this.save()
}