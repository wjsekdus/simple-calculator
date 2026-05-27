import globals from "globals";
export default [
 {
 files: ["src/**/*.js"],
 languageOptions: {
 ecmaVersion: "latest",
 sourceType: "module",
 globals: { ...globals.browser },
 },
 rules: {
 "no-unused-vars": "warn",//경고
 "no-undef": "error",
 },
 },
 {
 files: ["tests/**/*.js"],
 languageOptions: {
 ecmaVersion: "latest",
 sourceType: "module",
 globals: { ...globals.node, ...globals.jest, ...globals.browser },
 },
 rules: { "no-unused-vars": "warn" },
 },
];