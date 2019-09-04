const state = sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
  collapsed:false,
  uname:null
};
export default state;
