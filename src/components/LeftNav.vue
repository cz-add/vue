<template>
	<el-menu router :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
	 background-color="#334157" text-color="#fff" active-text-color="#ffd04b" :collapse="collapsed" :collapse-transition="bb">
		<div class="logobox">
			<img class="logoimg" src="../assets/img/uugai.com-1567474596590.png" alt="">
		</div>
		<el-submenu v-for="n1 in treeNodeList" :key="'key-'+n1.mid" :index="'index-'+n1.mid">
			<template slot="title">
				<i :class="n1.icon"></i>
				<span>{{n1.mname}}</span>
			</template>
			<el-menu-item v-for="n2 in n1.pmenus" :key="'key-'+n2.mid" :index="n2.url">
				<template slot="title">
					<i :class="n2.icon"></i>
					<span>{{n2.mname}}</span>
				</template>
			</el-menu-item>
		</el-submenu>
	</el-menu>
</template>
<script>
	export default {
		data: function() {
			return {
				bb: true,

				treeNodeList: []
			};
		},
		created: function() {

			let url = this.axios.urls.p2p_user_pmenu;
			this.axios.post(url, {}).then((resp) => {
			  console.log(resp.data);
				this.treeNodeList = resp.data.result;
        console.log(this.treeNodeList);
			}).catch((error) => {

			});
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		},computed: {
      collapsed: function() {
        return this.$store.getters.collapsed;
      }
    },

	}
</script>
<style>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 240px;
		min-height: 400px;
	}

	.el-menu-vertical-demo:not(.el-menu--collapse) {
		border: none;
		text-align: left;
	}

	.el-menu-item-group__title {
		padding: 0px;
	}

	.el-menu-bg {
		background-color: #1f2d3d !important;
	}

	.el-menu {
		border: none;
	}

	.logobox {
		height: 40px;
		line-height: 40px;
		color: #9d9d9d;
		font-size: 20px;
		text-align: center;
		padding: 20px 0px;
	}

	.logoimg {
		height: 100px;
    margin:-20px;
	}
</style>
