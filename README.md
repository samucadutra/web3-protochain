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

### Compile (transpile) the code
`npx tsc`

### To avoid compiling every time, install ts-node
`npm i -D ts-node`

### Changes in package.json
```
"scripts": {
    "compile": "npx tsc",
    "dev": "npx nodemon --watch './src/' --exec 'npx ts-node ./src/blockchain.ts' -e ts",
    "start": "node ./dist/blockchain.js"
  }
```
#### run the *compile* script:
`npm run compile`

#### run the *start* script:
`npm start`

#### run the *dev* script:
`npm run dev`

