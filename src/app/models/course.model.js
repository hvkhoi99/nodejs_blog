const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, maxLength: 600 },
        image: { type: String },
        videoId: { type: String },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true }, // de slug khong bi trung, them option unique: true vao
        // mac dinh neu trung no se them 1 id ngau nhien vao sau slug do
    },
    {
        timestamps: true,
    },
);

mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
}); //override tất cả dùng 'all' hay true đều được

module.exports = mongoose.model('Course', Course);
