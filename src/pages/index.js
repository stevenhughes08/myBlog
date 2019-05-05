import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Search from "../components/SearchContainer"

const IndexPage = () => (
  <Layout>
    <SEO title="CodeTape" keywords={[`gatsby`, `application`, `react`]} />
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
    </div>
    <div>
    <h1 style={{ marginTop: `3em`, textAlign: `center` }}>
      Search this Blog
    </h1>
    <div>
      <Search />
    </div>
  </div>
    
  </Layout>
)

export default IndexPage
