const express = require('express');
const blogController = require("./../Controllers/BlogController");
const router = express.Router();

//blog routes || Get Request
router.get('/', blogController.blog_index);
   
//POST Request
router.post('/', blogController.blog_create_post);

//Create Blog
router.get("/create", blogController.blog_create_get); 
   
//Get Request
router.get("/:id", blogController.blog_details);
   
//Delete Request
router.delete('/:id', blogController.blog_delete);

module.exports = router;
