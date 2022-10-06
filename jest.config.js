/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
  return {
    verbose: true,
    coverageReporters: ["clover", "json", "lcov", ["text", {skipFull: true}]],
    collectCoverage: true,
    collectCoverageFrom: ["./src/**"],
    coverageThreshold: {
      global: {
        lines: 90,
      },
    },
  }
}
