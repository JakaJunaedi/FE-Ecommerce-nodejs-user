//export const baseUrl = "https://nodejs-ecommerc.herokuapp.com"; //Base Backend Heroku
export const baseUrl = "http://localhost:2000"; //Base Backend local
//export const urlResetPassword = "http://localhost:2000/api/admin/reset-password" // reset password local
export const urlResetPassword = "https://nodejs-ecommerc.herokuapp.com/api/admin/reset-password"

export const baseHome = "http://localhost:3000" //Home Base client
export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
