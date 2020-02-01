module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./images')
  
    return {
      dir: { input: '.', output: 'dist', data: '_data' },
      passthroughFileCopy: true,
      templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
      htmlTemplateEngine: 'hbs'
    }
  }