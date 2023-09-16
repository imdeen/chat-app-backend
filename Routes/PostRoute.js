import express from 'express';
import { createPost, deletPost , getPost, getTimelinePosts, likePost, updatePost } from '../controllers/PostController.js';
import authMiddleWare from '../middleware/authMiddleWare.js';
const router = express.Router()

router.post('/', createPost)
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.delete('/:id', deletPost)
router.put('/:id/like', likePost)
router.get('/:id/timeline', getTimelinePosts)

export default router
