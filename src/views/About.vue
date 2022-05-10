<template>
	<div class="about">
		<div class="red box position-absolute top-50 ml-n1"></div>
		<div class="blue box float-none"></div>
	</div>
</template>

<script>

import innerHTMLFloat from '@/assets/js/common/css/index';


console.log(innerHTMLFloat);
export default {
	name: 'about',
	components: {
	},
	mounted () {

	}
}
</script>


<style lang="scss">
.red {
	background-color: red;
}

.blue {
	background-color: blue;
}

.box {
	width: 100px;
	height: 100px;
}
</style>