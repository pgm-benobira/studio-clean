module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("input/assets/styles");
    eleventyConfig.addPassthroughCopy("input/assets/images");
    eleventyConfig.addPassthroughCopy("input/assets/scripts");
    eleventyConfig.addPassthroughCopy("input/assets/fonts");
    return {
        dir: {
            input: 'input',
            output: 'output',
        }
    };
}