import React from 'react';

export type MediaItemType = MediaInfoType & {
  id: String;
};

export type ToggleModalType = {
  toggleModal: () => void;
};

export type MediaInfoType = {
  title: String;
  owner: String;
  type: String;
  synopsis: String;
};
