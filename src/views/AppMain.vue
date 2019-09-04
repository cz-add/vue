<template>
	<el-container class="main-container">
		<el-aside :class="asideClass">
			<LeftNav></LeftNav>
		</el-aside>
		<el-container>
			<el-header class="main-header">
				<TopNav></TopNav>
			</el-header>
			<el-main class="main-center">
				<router-view />
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import TopNav from '@/components/TopNav.vue'
	import LeftNav from '@/components/LeftNav.vue'
	export default {
		name: 'AppMain',
		data: function() {
			return {
				msg: 'Welcome to Your Vue.js App',
				collapsed: false
			}
		},
		computed: {
			asideClass: function() {
				return this.collapsed ? 'main-aside-collapsed' : 'main-aside';
			}
		},
		components: {
			TopNav,
			LeftNav
		},
		created: function() {
			this.$root.Bus.$on("aside-toggle", (v) => {
				console.log("侧边栏切换v=" + v);
				// this.collapsed=v;
				if (true === v) {
					setTimeout(() => {
						this.collapsed = true;
					}, 290);
				} else {
					this.collapsed = false;
				}
			});
		}
	}
</script>

<style scoped>
	.main-container {
		height: 100%;
		width: 100%;
		box-sizing: border-box;
	}

	.main-aside-collapsed {
		/* 在CSS中，通过对某一样式声明! important ，可以更改默认的CSS样式优先级规则，使该条样式属性声明具有最高优先级 */
		width: 64px !important;
		height: 100%;
		background-color: #334157;
		margin: 0px;
	}

	.main-aside {
		width: 240px !important;
		height: 100%;
		background-color: #334157;
		margin: 0px;
	}

	.main-header {
		padding: 0px;
		border-left: 2px solid #333;
	}

	.main-center {
		padding: 20px;
		border-left: 2px solid #333;
	}
</style>
