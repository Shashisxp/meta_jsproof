/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

const totalNFT = []; 
function mintNFT(Name, Rarity, Edition, Color, Keyword) {
   const NFT = {
    "name"    : Name,
    "rarity"  : Rarity,
    "edition" : Edition,
    "color"   : Color,
    "keyword" : Keyword
  };
 totalNFT.push(NFT);

}
function listNFTs() {

    for(let i = 0 ; i < totalNFT.length; i++)
    {
        console.log("NFT : " + (i+1) + "\n");
        console.log("Name : " + totalNFT[i].name);
        console.log("Rarity : " + totalNFT[i].rarity);
        console.log("Edition : " + totalNFT[i].edition);
        console.log("Color : " + totalNFT[i].color);
        console.log("Keyword : " + totalNFT[i].keyword + "\n\n");
    }

}
function getTotalSupply() {
    console.log("Total supply of  NFT collection is : " + totalNFT.length);
}
mintNFT("suraj" , "normal" , "general supply" , "red" , "goldy");      

mintNFT("Santosh" , "good" , "exclusive supply" , "Brown" , "chigo");     

mintNFT("Rohit" , "Rare" , "seasonal supply" , "white" , "char");      

mintNFT("Shashi" , "common" , "super supply" , "green" , "Duck");     

mintNFT("ammunition" , "Rare" , "limted supply" , "Black" , "bulba");      


listNFTs();

getTotalSupply();
