const state = sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
  collapsed:false,
  uname:null,
  resulta:null,
};
export default state;
