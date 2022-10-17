module.exports = (plop) => {
  plop.setGenerator("screen", {
    description: "Create a screen",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your screen name?",
      },
      {
        type: "input",
        name: "path",
        message: "path?",
      },
    ],
    actions: [
      {
        type: "add",
        // Plop will create directories for us if they do not exist
        // so it's okay to add files in nested locations.
        path: "src/screens/{{path}}/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/Screen/index.js.hbs",
      },
      {
        type: "add",
        path: "src/screens/{{path}}/{{pascalCase name}}/styles.js",
        templateFile: "plop-templates/Screen/Styles.js.hbs",
      },
    ],
  });
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
      {
        type: "input",
        name: "path",
        message: "path?",
      },
    ],
    actions: [
      {
        type: "add",
        // Plop will create directories for us if they do not exist
        // so it's okay to add files in nested locations.
        path: "src/shared/components/{{path}}/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/Component/index.js.hbs",
      },
      {
        type: "add",
        path: "src/shared/components/{{path}}/{{pascalCase name}}/styles.scss",
        templateFile: "plop-templates/Component/Styles.js.hbs",
      },
    ],
  });
};
