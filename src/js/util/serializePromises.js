function serializePromises(arrayOfPromises) {
  return arrayOfPromises.reduce(
    (m, p) => m.then(v => Promise.all([...v, p()])),
    Promise.resolve([])
  );
}

module.exports = exports = serializePromises;