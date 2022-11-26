import { Request, Response } from 'express';
import {
  createMedia,
  getAllMedia,
  getSingleMedia,
  getAllFilteredMedia,
  deleteSingleMedia,
  updateSingleMedia,
} from '../services/MediaService.js';
import { StatusCodes } from 'http-status-codes';

export async function fetchMediaTypes(req: Request, res: Response) {
  const { email } = req.query;
  const allMedia = await getAllMedia(email);
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

export async function fetchAllMedia(req: Request, res: Response) {
  const { email } = req.query;
  const allMedia = await getAllMedia(email);
  res.status(StatusCodes.OK).json(allMedia);
}

export async function fetchStatusInfo(req: Request, res: Response) {
  const { email } = req.query;
  const allMedia = await getAllMedia(email);
  const inProgress = allMedia.filter(
    (media) => media.statusType === 'In Progress'
  );
  const completed = allMedia.filter(
    (media) => media.statusType === 'Completed'
  );
  const toExplore = allMedia.filter(
    (media) => media.statusType === 'To Explore'
  );
  const dropped = allMedia.filter((media) => media.statusType === 'Droppped');
  res.status(StatusCodes.OK).json({
    total: allMedia.length,
    inProgress: inProgress.length,
    completed: completed.length,
    toExplore: toExplore.length,
    dropped: dropped.length,
  });
}

export async function fetchMediaItems(req: Request, res: Response) {
  const { type, email } = req.query;
  const filteredMedia = await getAllFilteredMedia(type, email);
  res.status(StatusCodes.OK).json(filteredMedia);
}

export async function addMediaItem(req: Request, res: Response) {
  const newMedia = req.body;
  await createMedia(newMedia);
  res.status(StatusCodes.OK).json({ msg: 'added' });
}

export async function fetchSingleMediaItem(req: Request, res: Response) {
  const { id } = req.params;
  const currentMedia = await getSingleMedia(id);
  res.status(StatusCodes.OK).json(currentMedia);
}

export async function updateMediaItem(req: Request, res: Response) {
  const { id } = req.params;
  const newMedia = req.body;
  await updateSingleMedia(id, newMedia);
  res.status(StatusCodes.OK).json({ msg: 'updated' });
}

export async function deleteMediaItem(req: Request, res: Response) {
  const { id } = req.params;
  await deleteSingleMedia(id);
  res.status(StatusCodes.OK).json({ msg: 'deleted' });
}
