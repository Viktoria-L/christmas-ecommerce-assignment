// jest.config.ts

export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "\\.[jt]sx?$": "ts-jest",
        // "^.+\\.tsx?$": "ts-jest" 
        // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
        '\\.(css|less|scss)$': 'identity-obj-proxy', // För att hantera CSS-importer

    },
}