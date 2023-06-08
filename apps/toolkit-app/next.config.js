const { withNextAuthAdapter } = require("@blitzjs/auth/next-auth")
const { withBlitz } = require("@blitzjs/next")

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
  reactStrictMode: true,
  blitz: {
    resolversDynamicImport: true,
  },
}

module.exports = withBlitz(withNextAuthAdapter(config))
