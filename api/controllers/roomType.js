import RoomType from "../models/RoomType.js"
import Room from "../models/Room.js";

export const createRoomType = async (req, res, next) => {
  const newRoomType = new RoomType(req.body)

  try {
    const savedRoomType = await newRoomType.save()
    res.status(200).json(savedRoomType)
  } catch (err) {
    next(err)
  }
};

export const updateRoomType = async (req, res, next) => {
  try {
    const updateroomType = await RoomType.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {
      new: true
    });
    res.status(200).json(updateRoomType);
  } catch (err) {
    next(err)
  }
};

export const deleteRoomType = async (req, res, next) => {
  try {
    await RoomType.findByIdAndDelete(
      req.params.id);
    res.status(200).json("Hotel has deleted");
  } catch (err) {
    next(err)
  }
};

export const getRoomType = async (req, res, next) => {
  try {
    const roomType = await RoomType.findById(req.params.id);
    res.status(200).json(roomType)
  } catch (err) {
    next(err)
  }
};
export const getRoomTypes = async (req, res, next) => {
  const {
    min,
    max,
    ...others
  } = req.query;
  try {
    const roomTypes = await RoomType.find({
      ...others,
      cheapestPrice: {
        $gt: min | 1,
        $lt: max || 999
      },
    }).limit(req.query.limit);
    res.status(200).json(roomTypes);
  } catch (err) {
    next(err);
  }
};

export const countByFloorNum = async (req, res, next) => {
  const floors = req.query.floors.split(",");
  try {
    const list = await Promise.all(
      floors.map((floorNum) => {
        return RoomType.countDocuments({
          floorNum: floorNum
        });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const roomType = await RoomType.findById(req.params.id);
    const list = await Promise.all(
      roomType.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};