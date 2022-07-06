require("dotenv").config();
const express = require("express");
const app = express();
const Web3 = require("web3");
const contract = require("@truffle/contract");
const artifacts = require("./build/Inbox.json");
app.use(express.json());

let web3;

if (typeof web3 !== "undefined") web3 = new Web3(web3.currentProvider);
else web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));

console.log(artifacts);

const LMS = contract(artifacts);
LMS.setProvider(web3.currentProvider);

app.listen(8000);
