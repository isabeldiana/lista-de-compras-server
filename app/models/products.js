module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('Products', {
      products: DataTypes.STRING,
      amount: DataTypes.INTEGER,
      
    });
  
    return Products;
  }
