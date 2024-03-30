module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("input/assets");
    eleventyConfig.addFilter("sortByOrder", (list) => {
        return list.sort((a, b) => a.data.order - b.data.order);
    })
    eleventyConfig.addFilter("sortByOrderReverse", (list) => {
        return list.sort((a, b) => b.data.order - a.data.order);
    });
    eleventyConfig.addFilter("getFirstAmountInList", (list, amount) => {
        return list.slice(0, amount);
    })
    return {
        dir: {
            input: 'input',
            output: 'output',
        }
    };
}