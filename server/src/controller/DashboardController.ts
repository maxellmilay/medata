import { Request, Response } from 'express';
import {
  createMedia,
  getAllMedia,
  getSingleMedia,
} from '../services/MediaService.js';
import { StatusCodes } from 'http-status-codes';

export async function fetchMediaTypes(req: Request, res: Response) {
  const allMedia = await getAllMedia();
  const mediaTypes: String[] = [];
  allMedia.forEach((item) => {
    const doesTypeExists = mediaTypes.includes(item.type);
    if (doesTypeExists) {
      return;
    }
    mediaTypes.push(item.type);
  });
  res.status(StatusCodes.OK).send(mediaTypes);
}

export async function fetchMediaItems(req: Request, res: Response) {
  const allMedia = await getAllMedia();
  res.status(StatusCodes.OK).json(allMedia);
}

export async function addMediaItem(req: Request, res: Response) {
  const newMedia = req.body;
  await createMedia(newMedia);
  res.status(StatusCodes.OK).json(newMedia);
}

export async function fetchSingleMediaItem(req: Request, res: Response) {
  const { id } = req.params;
  const currentMedia = await getSingleMedia(id);
  res.status(StatusCodes.OK).json(currentMedia);
}

export function updateMediaItem(req: Request, res: Response) {
  res.send('update media item');
}

export function deleteMediaItem(req: Request, res: Response) {
  res.send('delete media item');
}
