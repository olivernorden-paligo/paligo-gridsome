<template>
    <img :src="$props['fileref']" alt="">
</template>
<script>
export default {
	props: {
		'fileref': {
			type: String,
			default: "",
		},
	},
}
</script>
<style scoped>
	img {
		max-width: 500px;
		max-height: 500px;
	}
</style>