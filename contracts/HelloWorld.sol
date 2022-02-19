// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract HelloWorld {
    event NameUpdated(string newName, address updater);

    string name;

    function getName() public view returns (string memory) {
        return name;
    }

    function setName(string calldata newName) external {
        emit NameUpdated(newName, msg.sender);
        name = newName;
    }
}
