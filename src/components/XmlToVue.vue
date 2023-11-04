


<script>
// Cool way to render Vue components from HTML Strings
// https://medium.com/haiiro-io/compile-markdown-as-vue-template-on-nuxt-js-1c606c15731c
import VueWithCompiler from "vue/dist/vue.esm";
export default {
	props: {
		html: {
			type: String,
			default: "",
		},
	},
    components: {
        'vue-para': () => import('./xml/para'),
        'vue-alt': () => import('./xml/alt'),
        'vue-title': () => import('./xml/title'),
        'vue-subtitle': () => import('./xml/subtitle'),
        'vue-phrase': () => import('./xml/phrase'),
        'vue-link': () => import('./xml/link'),
        'vue-xref': () => import('./xml/xref'),
        'vue-itemizedlist': () => import('./xml/itemizedlist'),
        'vue-procedure': () => import('./xml/procedure'),
        'vue-listitem': () => import('./xml/listitem'),
        'vue-step': () => import('./xml/step'),
        'vue-mediaobject': () => import('./xml/mediaobject'),
        'vue-inlinemediaobject': () => import('./xml/inlinemediaobject'),
        'vue-imageobject': () => import('./xml/imageobject'),
        'vue-imagedata': () => import('./xml/imagedata'),
        'vue-videoobject': () => import('./xml/videoobject'),
        'vue-videodata': () => import('./xml/videodata'),
        'vue-emphasis': () => import('./xml/emphasis'),
        'vue-tip': () => import('./xml/tip'),
        'vue-section': () => import('./xml/section'),
        'vue-note': () => import('./xml/note'),
        'vue-warning': () => import('./xml/warning'),
        'vue-caution': () => import('./xml/caution'),
        'vue-important': () => import('./xml/important'),
        'vue-informalfigure': () => import('./xml/informalfigure'),
        'vue-sidebar': () => import('./xml/sidebar'),
        // 'vue-table': () => import('./xml/table'),
        'vue-informaltable': () => import('./xml/informaltable'),
        'vue-guilabel': () => import('./xml/guilabel'),
        'vue-programlisting': () => import('./xml/programlisting'),
        'vue-bridgehead': () => import('./xml/bridgehead'),
        'vue-caption': () => import('./xml/caption'),
        'vue-indexterm': () => import('./xml/indexterm'),
        'vue-footnote': () => import('./xml/footnote'),
        'vue-volumenum': () => import('./xml/volumenum'),
        'vue-pubdate': () => import('./xml/pubdate'),
        'vue-copyright': () => import('./xml/copyright'),
        'vue-legalnotice': () => import('./xml/legalnotice'),
        'vue-abstract': () => import('./xml/abstract'),
        'info': () => import('./xml/info'),
    },
	data() {
		return { templateRender: undefined };
	},
	watch: {
		html(to) {
			this.updateRender();
		},
	},
	created() {
		this.updateRender();
	},
	methods: {
		updateRender() {
			const compiled = VueWithCompiler.compile(this.html);
			this.templateRender = compiled.render;
			this.$options.staticRenderFns = [];
			for (const staticRenderFunction of compiled.staticRenderFns) {
				this.$options.staticRenderFns.push(staticRenderFunction);
			}
		},
	},
	render() {
		return this.templateRender();
	},
};
</script>