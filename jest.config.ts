const nextJest = require("next/jest");
const createJestConfig = nextJest({ dir: __dirname });
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.tsx"],
};

export default createJestConfig(config);
