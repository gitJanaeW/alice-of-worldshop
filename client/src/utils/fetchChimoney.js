const returnChimoney = () => {
    const sdk = require("api")('@chimoney/v0.2.1#2w2jenlbc6ubix');
    sdk.auth("5fa47041cf1bca32b11f72a3bac177bcbec210479c06821401b5e3501ca7e262");

    sdk.getV02InfoAssets()
    .then(({data}) => {
        console.log(data)
    })
    .catch(err => console.error(err));
}



