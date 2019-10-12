import React from 'react';

export const GlobalContext = React.createContext({
  loogedIn: false,
  renderPath: () => {},
  setActiveBottomItemName: () => {},
  activeBottomItemName: '',
  showMapTags: false,
  setShowMapTags: () => {},
  API_URL: '',
  token: '',
  points: [],
});
