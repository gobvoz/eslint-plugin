const path = require('path');

const layers = require('../const/layers');

const isPathRelative = require('./is-path-relative');

// c:/projects/new/src/app/...
// features/my-feature/...
const shouldBeRelative = (importer, exporter) => {
  if (isPathRelative(importer)) {
    return false;
  }

  const exporterParts = exporter.split('/');
  const exporterLayer = exporterParts[0];
  // for shared layer, there is no "slice", but "segment". Second part is the segment type
  const exporterSlice = exporterLayer === layers.shared ? exporterParts[2] : exporterParts[1];

  if (!exporterLayer || !exporterSlice || !layers[exporterLayer]) {
    return false;
  }

  const importerNormalized = path.toNamespacedPath(importer);
  const importerPathFromRoot = importerNormalized.split('src')[1];
  const importerParts = importerPathFromRoot.split(/\\|\//);
  const importerLayer = importerParts[1];
  // for shared layer, there is no "slice", but "segment". Third part is the segment type
  const importerSlice = importerLayer === layers.shared ? importerParts[3] : importerParts[2];

  if (!importerLayer || !importerSlice || !layers[importerLayer]) {
    return false;
  }

  if (exporterLayer === importerLayer && exporterSlice === importerSlice) {
    return true;
  }
};

module.exports = shouldBeRelative;
