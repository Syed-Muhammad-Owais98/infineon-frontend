module.exports = {
    root: true,
    parser: "vue-eslint-parser",
    parserOptions: {
        vueFeatures: {
            filter: true,
            interpolationAsNonHTML: false,
        },
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
    },
    plugins: ["vue", "prettier"],
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)",
            ],
            env: {
                jest: true,
            },
        },
    ],
};
