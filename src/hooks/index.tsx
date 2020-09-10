import React from 'react';

import { AuthProvider } from './auth';
import { CompanyProvider } from './company';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <CompanyProvider>{children}</CompanyProvider>
  </AuthProvider>
);

export default AppProvider;
