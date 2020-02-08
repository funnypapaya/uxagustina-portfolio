module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./images')
    eleventyConfig.addPassthroughCopy('./favicon.ico')
  
    return {
      dir: { input: '.', output: 'dist', data: '_data' },
      passthroughFileCopy: true,
      templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
      htmlTemplateEngine: 'hbs'
    }
  }