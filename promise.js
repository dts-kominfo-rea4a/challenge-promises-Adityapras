const {
  promiseTheaterIXX,
  promiseTheaterVGC
} = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const ixx = await promiseTheaterIXX(emosi);
  const vgc = await promiseTheaterVGC(emosi);
  const mergeData = ixx.concat(vgc);
  const result = mergeData.filter(data => data.hasil === emosi);
  return result.length;
};

module.exports = {
  promiseOutput,
};