<template>
    <iframe width="560" height="315" :src="$props['fileref']" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</template>
<script>
export default {
	props: {
		'fileref': {
			type: String,
			default: "https://www.youtube.com/embed/eYOAuUGZn1U",
		},
	},
}
</script>
<style lang="">
    
</style>