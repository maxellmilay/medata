import React from 'react';

export type MediaItemType = {
  title: String;
  owner: String;
  id?: React.Key;
};

export type ToggleModalType = {
  toggleModal: () => void;
};
