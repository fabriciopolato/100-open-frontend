import React, { createContext, useCallback, useState, useContext } from 'react';
import { api } from '../services/api';

interface AuthState {
  accessToken: string;
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  signUp(credentials: SignInCredentials): Promise<void>;
  accessToken: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem('open:accessToken');

    if (accessToken) {
      api.defaults.headers.Authorization = `Bearer ${accessToken}`;
      return { accessToken };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post('/auth/login', {
      username,
      password,
    });

    const { accessToken } = response.data;

    api.defaults.headers.Authorization = `Bearer ${accessToken}`;

    localStorage.setItem('open:accessToken', accessToken);

    setData({ accessToken });
  }, []);

  const signUp = useCallback(async ({ username, password }) => {
    const response = await api.post('/auth/signup', {
      username,
      password,
    });

    const { accessToken } = response.data;

    api.defaults.headers.Authorization = `Bearer ${accessToken}`;

    localStorage.setItem('open:accessToken', accessToken);

    setData({ accessToken });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('open:accessToken');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ accessToken: data.accessToken, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuth };
