import express from 'express';
import {
  addMediaItem,
  deleteMediaItem,
  fetchMediaItems,
  fetchMediaTypes,
  fetchStatusInfo,
  fetchSingleMediaItem,
  updateMediaItem,
  fetchAllMedia,
} from '../controller/DashboardController.js';
import {
  TYPES,
  ITEMS,
  ALL_ITEMS,
  STATUS,
  ADD_ITEM,
  ID_PARAM,
} from '../constants/routes.js';
const DashboardRouter = express.Router();

DashboardRouter.route(TYPES).get(fetchMediaTypes);
DashboardRouter.route(ITEMS).get(fetchMediaItems);
DashboardRouter.route(ALL_ITEMS).get(fetchAllMedia);
DashboardRouter.route(STATUS).get(fetchStatusInfo);
DashboardRouter.route(ADD_ITEM).post(addMediaItem);
DashboardRouter.route(ID_PARAM)
  .get(fetchSingleMediaItem)
  .patch(updateMediaItem)
  .delete(deleteMediaItem);

export default DashboardRouter;
