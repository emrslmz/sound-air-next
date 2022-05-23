import config from '../../core/config';

export const isLoading = (state) => state.runningRequests.filter((request) => request.show).length > 0;

export const isExistsRunningRequest = (state) => state.runningRequests.length > 0;

export const crossAppUrl = () => config.VITE_CROSS_APP_URL;

export const getEnvironmentVariable = () => (key) =>config[key];

export const isProduction = () => config.VITE_APP_TYPE === 'production';
