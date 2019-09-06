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
  'p2p_user_jy':'/user/upjy',//查询所有
  'p2p_user_upload':'/user/upload',//图片

  //安全管理
  //数据字典
  'p2p_safety_list':'/safety/list',
  'p2p_safety_add':'/safety/add',
  'p2p_safety_del':'/safety/del',
  'p2p_safety_update':'/safety/update',

  //角色管理
  'p2p_safety_prole_list':'/prole/list',
  'p2p_safety_prole_del':'/prole/del',
  'p2p_safety_prole_add':'/prole/add',

  //树形
  'p2p_user_pmenu':'/pmenu/getTree',//菜单


	//获得请求的完整地址，用于mockjs测试时使用
	'getFullPath': k => {
		return this.SERVER + this[k];
	}
}
