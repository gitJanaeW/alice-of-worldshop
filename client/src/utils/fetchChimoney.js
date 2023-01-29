let assets = null;

// const fetchChimoney = async () => {
//     const sdk = require("api")('@chimoney/v0.2.1#2w2jenlbc6ubix');
//     sdk.auth("5fa47041cf1bca32b11f72a3bac177bcbec210479c06821401b5e3501ca7e262");
//     try {
//         assets = await sdk.getV02InfoAssets();
//     } catch (err) {
//         console.log(err);
//     }
//     return assets;
// };


const fetchStore = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=> {assets = json; console.log(assets[0].title)});
    return assets;
}

fetchStore();

// module.exports = fetchChimoney;
module.exports = fetchStore;