const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Product = require('../models/Product');
const Tag = require('../models/Tag');

class ProductTag extends Model { }

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      notNull: true,
      primaryKey: true,
      autoIncrement: true
    },

    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },

    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
