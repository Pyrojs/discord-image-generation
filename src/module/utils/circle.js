const jimp = require("jimp");

module.exports = class Circle {
    /**
     * Circle
     * @param {image} image 
     */
    async getImage(image) {
        if (!image) throw new Error(`You must provide an image.`);
        image = await jimp.read(image);
        image.resize(480, 480);
        image.circle();
        let raw;
        image.getBuffer(`image/png`, (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }
}