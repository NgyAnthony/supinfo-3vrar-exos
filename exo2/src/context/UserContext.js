import React from 'react';

const UserContext = React.createContext({
  user: {
    "connected": false,
  }
});

export { UserContext };
