<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <XmlToVue :html="$page.currentPage.xml" />
  </Layout>
</template>

<script>
import XmlToVue from '~/components/XmlToVue.vue'
export default {
  components: {
    XmlToVue
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<page-query>
  query ($path: String) {
      currentPage: paligoPage (path: $path) {
          xml
      }
  }
</page-query>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
