/**
 * Calculates geometric distribution variance of success probability `p`.
 *
 * @param {number} p Success probability.
 * @returns {number} Geometric distribution variance
 */
function geometricVariance(p) {
  return (1 - p) / Math.pow(p, 2);
}

module.exports = geometricVariance;
