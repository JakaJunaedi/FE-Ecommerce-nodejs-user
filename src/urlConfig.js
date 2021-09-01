const baseUrl = "https://nodejs-ecommerc.herokuapp.com"; //Base Backend Heroku
//const baseUrl = "http://localhost:2000"; //Base Backend local

export const baseHome = "http://localhost:3000" //Home Base
export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
