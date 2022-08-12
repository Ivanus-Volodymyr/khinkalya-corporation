const apiURL = 'http://localhost:3001';

export default apiURL;

export const urls = {
  registration: '/auth/registration',
  login: '/auth/login',
  googleLogin: '/auth/google/login',
  geolocation: '/auth/google/geolocation',
  refresh: '/auth/refresh',
  user: '/user',
  logout: '/auth/logout',
  dish: '/dish',
  locality: '/locality',
  restaurants: '/restaurants',
  order: '/order',
  reviews: '/reviews',
  promotions: '/promotions',
  frequentOrder: '/frequentOrder',
};

export const mapURL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`;
