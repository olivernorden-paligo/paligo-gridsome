// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  const {JSDOM} = require('jsdom');
  const { readFileSync } = require('fs')

  let pub = readFileSync('./publication/out/publication-37198--en.xml', 'utf-8');

  pub = pub.replaceAll('</informaltable', '</table').replaceAll('<informaltable', '<table');

  const dom = new JSDOM(pub);

  let pages = [];

  let resourceIds = [];
    
  const convertVue = (nodeList) => {
    for (let el of nodeList) {

      if (el.children.length) {
        convertVue(el.children);
      }

      if ([
        'TABLE',
        'THEAD',
        'TFOOT',
        'TBODY',
        'TR',
        'TD',
        'TH',
        'COLGROUP',
        'COL',
      ].includes(el.tagName)) {
        continue;
      };

      let attrs = ' ';
      for (const attr of el.attributes) {
        attrs += attr.name + '="' + attr.value + '" ';
      }
      el.outerHTML = "<vue-" + el.tagName + attrs + ">" + el.innerHTML + "</vue-" + el.tagName + ">";
    }
  }

  for (node of dom.window.document.querySelectorAll("article > section")) {

    const resourceId = node.getAttribute('xinfo:resource-id');
    const title = node.getAttribute('xinfo:resource-title');

    if (resourceIds.includes(resourceId)) {
      continue;
    }
    resourceIds.push(resourceId);
    convertVue(node.children);

    pages.unshift({
      path: '/' + resourceId,
      uid: node.getAttribute('xml:id'),
      resourceId,
      title,
      component: './src/templates/PaligoPageTemplate.vue',
      xml: node.outerHTML,
    })
  }

  const article = dom.window.document.querySelector("article");
  const articleInfo = article.querySelector("info")
  convertVue(articleInfo.children);

  pages.push({
    path: '/',
    uid: article.getAttribute('xml:id'),
    resourceId: article.getAttribute('xinfo:resource'),
    title: article.getAttribute('xinfo:resource-title'),
    component: './src/templates/PaligoIndexPageTemplate.vue',
    xml: articleInfo.outerHTML,
  })

  api.loadSource(({ addCollection }) => {
    const paligPages = addCollection({
      typeName: 'PaligoPage'
    })

    pages.forEach(({title, resourceId, xml, path, uid}) => {
      paligPages.addNode({
        title,
        path,
        uid,
        resourceId,
        xml,
      })
    })
  })

  api.createPages(({ createPage }) => {
    pages.forEach(({path, component}) => {
      createPage({
        path,
        component,
        queryVariables: {
          path: path,
        }
      })
    })

    // dom.window.document.getElementsByTagName("section").forEach(node => {
    // })
    // createPage({
    //   path: '/paligo-page',
    //   component: './src/templates/PaligoPageTemplate.vue'
    // })

    // createPage({
    //   path: '/paligo-page2',
    //   component: './src/templates/PaligoPageTemplate.vue'
    // })
  })
}
