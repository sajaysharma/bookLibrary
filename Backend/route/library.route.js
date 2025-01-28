import express from "express";
import  {getLibrary} from "../controller/library.controller.js";

const router = express.Router();

router.post("/admin",getLibrary);


export default router;