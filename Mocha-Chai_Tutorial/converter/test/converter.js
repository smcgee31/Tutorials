const expect    = require('chai').expect;
const converter = require('../app/converter');


describe('Color Code Converter', () => {

  describe('RGB to Hex conversion', () => {
    
    it('converts the basic colors', () => {
      const redHex   = converter.rgbToHex(255, 0, 0);
      const greenHex = converter.rgbToHex(0, 255, 0);
      const blueHex  = converter.rgbToHex(0, 0, 255);

      expect(redHex).to.equal('ff0000');
      expect(greenHex).to.equal('00ff00');
      expect(blueHex).to.equal('0000ff');
    });

  });

  describe('Hex to RGB conversion', () => {

    it('converts the basic colors', () => {
      const red   = converter.hexToRgb('ff0000');
      const green = converter.hexToRgb('00ff00');
      const blue  = converter.hexToRgb('0000ff');

      expect(red).to.deep.equal([255, 0, 0]);
      expect(green).to.deep.equal([0, 255, 0]);
      expect(blue).to.deep.equal([0, 0, 255]);
    });

  });

});

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};

function dontPanic(location) {
  var list = "Avast, me hearties!\n" +
             "There be Pirates nearby! Stations!\n";

  // loop through the rangers and append to list
  for (var i = 0; i < location.numRangers ; i++) {
  	list += location['ranger' + (i+1)].name + ', man the ' + location.weaponBulbs[location['ranger' + (i+1)].station-1][0] + '!\n';
  }  

  alert(list);
}

dontPanic(lighthouseRock);

