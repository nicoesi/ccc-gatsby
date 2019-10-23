/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.onPreRouteUpdate = () => {
  const loadScripts = () => {
    global._babelPolyfill = false;
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.async = true
    script.src = "https://cdn.commerce7.com/beta/commerce7.js"
    script.id = "c7-javascript"
    script.setAttribute("data-tenant", "hedony")
    window.document.body.appendChild(script)

    const script2 = document.createElement("script")
    script2.type = "text/javascript"
    script2.async = true
    script2.src =
      "https://cdn.commerce7.com/beta/manifest.3f06ce15d0a854115427.js"
    window.document.body.appendChild(script2)

    const vendor = document.createElement("script")
    vendor.async = true
    vendor.src = "https://cdn.commerce7.com/beta/vendor.3f06ce15d0a854115427.js"
    window.document.body.appendChild(vendor)

    const bundle = document.createElement("script")
    bundle.async = true
    bundle.src = "https://cdn.commerce7.com/beta/bundle.3f06ce15d0a854115427.js"
    window.document.body.appendChild(bundle)
  }
  loadScripts()
}
