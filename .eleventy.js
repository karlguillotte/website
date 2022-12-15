module.exports = function (config) {
  config.setTemplateFormats(["md", "css"]);
  config.addPassthroughCopy("*.css");

  return {
    dir: {
      input: "src",
    },
  };
};
