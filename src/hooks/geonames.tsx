import React, { createContext, useState, useContext } from 'react';
import { IGeoNamesLocation } from '../interfaces';

export interface IContext {
  geoNamesCities: IGeoNamesLocation[];
  setGeoNamesCities: React.Dispatch<React.SetStateAction<IGeoNamesLocation[]>>;
}

const GeoNamesContext = createContext<IContext>({} as IContext);

const GeoNamesProvider: React.FC = ({ children }) => {
  const [geoNamesCities, setGeoNamesCities] = useState<IGeoNamesLocation[]>([]);

  return (
    <GeoNamesContext.Provider value={{ geoNamesCities, setGeoNamesCities }}>
      {children}
    </GeoNamesContext.Provider>
  );
};

const useGeoNames = (): IContext => {
  const context = useContext(GeoNamesContext);

  if (!context) {
    throw new Error('useGeoNames must be used within an AuthProvider');
  }

  return context;
};

export { GeoNamesProvider, useGeoNames };
