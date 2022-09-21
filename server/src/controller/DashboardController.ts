import { Request, Response } from 'express';
import { createMedia, getAllMedia } from '../services/MediaService.js';
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
  await createMedia({
    owner: 'Max',
    synopsis: 'hahahahhahehe',
    title: 'cool movie',
    type: 'movie',
  });
  res.status(StatusCodes.OK).json({ msg: 'success' });
}

export function fetchSingleMediaItem(req: Request, res: Response) {
  res.send('single media item');
}

export function updateMediaItem(req: Request, res: Response) {
  res.send('update media item');
}

export function deleteMediaItem(req: Request, res: Response) {
  res.send('delete media item');
}
