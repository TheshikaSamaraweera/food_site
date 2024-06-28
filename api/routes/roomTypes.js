import express from "express";
import { getHotelRooms,
    countByFloorNum, 
    createRoomType, 
    deleteRoomType, 
    getRoomType, 
    getRoomTypes, 
    updateRoomType } from "../controllers/roomType.js";
import RoomType from "../models/RoomType.js";
import {verifyAdmin} from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createRoomType);

//UPDATE
router.put("/:id", verifyAdmin, updateRoomType);
//DELETE
router.delete("/:id", verifyAdmin, deleteRoomType);

//GET
router.get("/find/:id", getRoomType);

//GET ALL
router.get("/", getRoomTypes);

router.get("/countByFloorNum", countByFloorNum);

router.get("/room/:id", getHotelRooms);


export default router