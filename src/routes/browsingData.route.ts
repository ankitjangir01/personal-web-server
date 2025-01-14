import { Router } from "express";
import { BrowsingData } from "./../controllers/browsingData.controller";
const browseDataController = new BrowsingData();

const router = Router();

module.exports = function () {
    router.post('/saveBrowsingLoc', browseDataController.saveBrowsingLoc);

    return router;
}
