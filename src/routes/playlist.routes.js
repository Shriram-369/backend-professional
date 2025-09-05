import { Router } from "express";
import {
    createPlaylist,
    getUserPlaylists,
    getPlaylistById,
    addVideoToPlaylist,
    removeVideoFromPlaylist
} from "../controllers/playlist.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router();

router.use(verifyJWT);

router.route("/create").post(createPlaylist)
router.route("/user/:userId").get(getUserPlaylists)
router.route("/:playlistId").get(getPlaylistById)

router.route("/add/:videoId/:playlistId").patch(addVideoToPlaylist)
router.route("/remove/:videoId/:playlistId").patch(removeVideoFromPlaylist)



export default router