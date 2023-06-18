export default {
  "moduleFileExtensions": [
    "js",
    "json",
    "ts"
  ],
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "coverageDirectory": "./coverage/automationu-nestjs",
  "testEnvironment": "node",
  "displayName": "automationu-nestjs",
  "testMatch": [
    "<rootDir>/src/**/*(*.)@(spec|test).[jt]s?(x)"
  ],
  "preset": "./jest.preset.js"
}
