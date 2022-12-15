module.exports = function (config) {
  config.setTemplateFormats(["md", "css"]);

  return {
    dir: {
      input: "src",
    },
  };
};
