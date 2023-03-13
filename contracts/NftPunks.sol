// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NftPunks is ERC721, ERC721Enumerable {
    using Counters for Counters.Counter;

    Counters.Counter private idCounter;
    uint256 immutable maxSupply;
    address owner;

    constructor( uint256 _maxSupply) ERC721("NFTPUNKS-ELI", "EPUNK") {
        maxSupply = _maxSupply;
        owner = msg.sender;
    }

    function getMaxSupply() public view returns(uint256){
        return maxSupply;
    }

    function mint() public payable  {
        // pregunto si esta enviando 0.1 eth
        require( msg.value >= 0.1 ether, "Insufficient funds" );

        // me fijo si quedan PUNKS disponibles        
        uint256 current = idCounter.current();
        require( current < maxSupply, "No PUNKS left");

        // transfiero los ethers
        payable(owner).transfer( msg.value );

        // envio el NFT
        _safeMint(msg.sender, current);

        // incremento el contador
        idCounter.increment();
    }

    // Override required
    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable){
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }
    // function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override(ERC721, ERC721Enumerable) {
    //     super._beforeTokenTransfer(from, to, tokenId);
    // }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

}
