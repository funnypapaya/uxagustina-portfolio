module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./images')
    eleventyConfig.addPassthroughCopy('./scripts')
    eleventyConfig.addPassthroughCopy('./favicon.ico')
    eleventyConfig.addPassthroughCopy('./pdf')
    eleventyConfig.addPassthroughCopy('./_redirects')
  
    return {
      dir: { input: '.', output: 'dist', data: '_data' },
      passthroughFileCopy: true,
      templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
      htmlTemplateEngine: 'hbs'
    }
  }