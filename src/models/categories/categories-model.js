'use strict';

const Model = require('../memory-model.js');
/**
 * Memory Model
 * @module models/Categories/categories-model
 */

const schema = {
  _id: {required:true},
  name: {required:true},
};

class Categories extends Model {}

/**
 * Exports a schema for an New Categories
 */
module.exports = new Categories(schema);
