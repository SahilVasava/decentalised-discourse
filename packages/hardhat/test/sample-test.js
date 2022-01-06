const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Dev3News", function () {
  it("Should deploy Dev3News", async function () {
    const Dev3NewsContract = await ethers.getContractFactory("Dev3News");
    const dev3News = await Dev3NewsContract.deploy();
    await dev3News.deployed();
  });
});
