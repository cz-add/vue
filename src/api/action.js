/**
 * 对后台请求的地址的封装，URL格式如下：
 * 模块名_实体名_操作
 */
export default {
	//服务器
	'SERVER': 'http://localhost:8080/p2p',

	//用户管理
	'p2p_user_login': '/user/login', //登陆
	'p2p_user_zc': '/user/zc', //注册
  'p2p_user_list':'/user/list',//查询所有
  'p2p_user_jy':'/user/jy',//查询所有
  'p2p_user_upload':'/user/upload',//图片


  //树形
  'p2p_user_pmenu':'/pmenu/getTree',//菜单


	//获得请求的完整地址，用于mockjs测试时使用
	'getFullPath': k => {
		return this.SERVER + this[k];
	}
}
