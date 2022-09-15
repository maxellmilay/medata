import express from 'express';
import {
  addMediaItem,
  deleteMediaItem,
  fetchMediaItems,
  fetchMediaTypes,
  fetchSingleMediaItem,
  updateMediaItem,
} from '../controller/DashboardController.js';

const DashboardRouter = express.Router();

//add media to server middleware parameter
DashboardRouter.route(TYPES).get(fetchMediaTypes);
DashboardRouter.route(ITEMS).get(fetchMediaItems);
DashboardRouter.route(ADD_ITEM).post(addMediaItem);
DashboardRouter.route(ID_PARAM)
  .get(fetchSingleMediaItem)
  .patch(updateMediaItem)
  .delete(deleteMediaItem);

export default DashboardRouter;
