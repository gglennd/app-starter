import antfu from "@antfu/eslint-config";

export default antfu({
  type: "app",
  formatters: true,
  react: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
  ignores: [
    "./src/routeTree.gen.ts",
    "./migrations/*",
    "docker-compose.yaml",
  ],
  rules: {
    "no-console": ["warn"],
    "perfectionist/sort-imports": ["error", {
      tsconfigRootDir: ".",
    }],
    "unicorn/filename-case": ["error", {
      case: "kebabCase",
      ignore: ["README.md"],
    }],
  },
});
