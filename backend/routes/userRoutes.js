import express from "express";
import { authUser, registerUser, logOutUSer, getUserProfile, updateUSerProfile } from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleWare.js";

const router = express.Router()

router.post('/', registerUser)
router.post('/auth', authUser)
router.post('/logout', logOutUSer)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUSerProfile)

export default router