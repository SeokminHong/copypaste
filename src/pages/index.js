import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CopyButton from "../components/copyButton"

const IndexPage = ({ location }) => {
  const params = new URLSearchParams(location.search)
  const q = params.get("q")
  return (
    <Layout>
      <Seo title="Home" />
      <CopyButton defaultText={q} />
    </Layout>
  )
}

export default IndexPage
