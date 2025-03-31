# web3-protochain
Blockchain prototype using Node and Typescript

## Init commands

### create project
`npm init -y`

### install typecript on project
`npm i -D typescript`

### initialize typescript on project
`npx tsc --init`

### Changes in tsconfig.json
#### modified lines:
```
"rootDir": "./src/"
"moduleResolution": "node10"
"outDir": "./dist/"
```

### Transpile the code
`npx tsc`

### Changes in package.json
```
"scripts": {
    "compile": "npx tsc",
    "start": "node ./dist/blockchain.js"
  }
```
#### `npm run compile` to run the *compile* script
#### `npm start` to run the *start* script

