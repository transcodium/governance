const TNSToken = artifacts.require("TNS");

module.exports = function (deployer) {
  deployer.deploy(TNSToken);
};
