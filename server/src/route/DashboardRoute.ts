import express from 'express';
import {
  addMediaItem,
  deleteMediaItem,
  fetchMediaItems,
  fetchMediaTypes,
  fetchSingleMediaItem,
  updateMediaItem,
} from '../controller/DashboardController.js';
import { TYPES, ITEMS, ADD_ITEM, ID_PARAM } from '../constants/routes.js';
const DashboardRouter = express.Router();

DashboardRouter.route(TYPES).get(fetchMediaTypes);
DashboardRouter.route(ITEMS).get(fetchMediaItems);
DashboardRouter.route(ADD_ITEM).post(addMediaItem);
DashboardRouter.route(ID_PARAM)
  .get(fetchSingleMediaItem)
  .patch(updateMediaItem)
  .delete(deleteMediaItem);

export default DashboardRouter;
