const Product = require('../models/Product');
const asyncHandler = require('express-async-handler')

// @route    GET  /api/products
// @desc     fetch all products
// @access   public
exports.getProducts = asyncHandler(async (req, res, next) => { 
    const products = await Product.find()
    res.status(200).json({ success: true, products })
}) 


// @route    POST  /api/products
// @desc     create a new Product
// @access   private - Admin
exports.postProduct = asyncHandler(async (req, res, next) => { 
  const newProduct = new Product(req.body); 
  const savedProduct = await newProduct.save(); 
  res.status(201).json({success: true, savedProduct})
})

// @route    GET  /api/products/:id
// @desc     create a single Product
// @access   Public
exports.getProduct = asyncHandler(async (req, res, next) => { 
  const product = await Product.findById(req.params.prodId)
  res.status(200).json({success: true, product})
})


// @route    PUT  /api/products/:id
// @desc     Update a product
// @access   Private
exports.putProduct = asyncHandler(async (req, res, next) => { 
  const updatedProduct = await Product.findByIdAndUpdate(req.params.prodId, { $set: req.body }, { new: true })
  res.status(200).json({success: true, updatedProduct})
})

// @route    DELETE  /api/products/:id
// @desc     Delete a product
// @access   Private

exports.deleteProduct = asyncHandler(async (req, res, next) => { 
  await Product.findByIdAndDelete(req.params.prodId)
  res.status(200).json({success:true, message: 'Product Deleted'})
})



