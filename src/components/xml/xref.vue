<template>
	<g-link :to="getLink()" class="xref-glink">
		<slot></slot>
	</g-link>
</template>
<script>
export default {
	props: {
		'xlink:href': {
			type: String,
			default: "",
		},
	},
	methods: {
		getLink() {
			const uid = this.$props['xlink:href'].replace('#', '');
			if (!uid) {
				return '';
			}

			const page = this.$page.pages.edges.find(({node}) => uid.indexOf(node.uid) === 0)?.node;


			if (!page) {
				return uid;
			}

			return page.path;
		}
	}
}
</script>
<style lang="">
    
</style>