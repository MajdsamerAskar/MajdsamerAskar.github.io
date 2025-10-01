module.exports = {
  base: '/',
  title: 'Majd Samer',
  description: 'Personal website of Majd Samer - Software Developer',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Contact', link: '/contact/' }
    ],
    sidebar: 'auto',
    lastUpdated: 'Last Updated',
  }
}