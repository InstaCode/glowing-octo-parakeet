export default {
  "moduleFileExtensions": [
    "js",
    "json",
    "ts"
  ],
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "coverageDirectory": "./coverage/awesome-nestjs-boilerplate",
  "testEnvironment": "node",
  "displayName": "awesome-nestjs-boilerplate",
  "testMatch": [
    "<rootDir>/src/**/*(*.)@(spec|test).[jt]s?(x)"
  ],
  "preset": "./jest.preset.js"
}