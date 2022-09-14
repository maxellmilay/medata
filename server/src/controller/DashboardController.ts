import { Request, Response } from 'express';
import db from '../db/firestore.js';

export function fetchMediaTypes(req: Request, res: Response) {
  res.send({ msg: 'media type list' });
}

export function fetchMediaItems(req: Request, res: Response) {
  res.send('media items');
}

export function addMediaItem(req: Request, res: Response) {
  res.send('media item');
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
