<template>
    <a :href="$props['xlink:href']">
        <slot></slot>
    </a>
</template>
<script>
export default {
	props: {
		'xlink:href': {
			type: String,
			default: "",
		},
	},
}
</script>
<style lang="">
    
</style>