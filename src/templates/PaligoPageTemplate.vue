<template>
    <Layout>
        <XmlToVue :html="$page.currentPage.xml"/>
    </Layout>
</template>

<script>
    import XmlToVue from '~/components/XmlToVue.vue'

    export default {
        components: {
            XmlToVue
        }
    }
</script>

<style scoped>
</style>

<page-query>
    query ($path: String) {
        currentPage: paligoPage (path: $path) {
            xml
        }
        pages: allPaligoPage {
            edges {
                node {
                    path,
                    resourceId,
                    uid
                }
            }
        }
    }
</page-query>