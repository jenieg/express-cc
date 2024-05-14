import express from 'express';
import { 
    getPosts, 
    getPost, 
    createPost, 
    updatePost, 
    deletePost 
} from '../controllers/postController.js'
const router = express.Router();

//Get All Posts
router.get('/', getPosts)

//Get Single Post
router.get('/:id', getPost);

//Create New Post
router.post('/', createPost)

//Update Post
router.put('/:id', updatePost)

//Delete Post
router.delete('/:id', deletePost)

export default router;
