import React from 'react';

import { AuthProvider } from './auth';
import { CompanyProvider } from './company';
import { GeoNamesProvider } from './geonames';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <CompanyProvider>
      <GeoNamesProvider>{children}</GeoNamesProvider>
    </CompanyProvider>
  </AuthProvider>
);

export default AppProvider;
