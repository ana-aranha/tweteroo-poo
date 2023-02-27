import express from 'express';
import { getTweets, postTweet, getUserTweets } from "../controllers/tweets-controller.js";

const router = express.Router()

router.post("/tweets", postTweet)
router.get("/tweets", getTweets)
router.get("/tweets/:username", getUserTweets)

export default router