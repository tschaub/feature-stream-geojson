var Plugin = require('feature-stream').Plugin;



/**
 * GeoJSON plugin constructor.
 * @constructor
 */
function GeoJSON() {
}
GeoJSON.prototype = Object.create(Plugin.prototype, {
  constructor: {value: GeoJSON}
});


/**
 * Test if the plugin handles the object.
 *
 * @param {*} obj Object (needs spec).
 * @return {boolean} The plugin can handle it.
 */
GeoJSON.prototype.handles = function(obj) {
  return true;
};


/**
 * GeoJSON plugin.
 * @type {GeoJSON}
 */
exports = module.exports = new GeoJSON();
