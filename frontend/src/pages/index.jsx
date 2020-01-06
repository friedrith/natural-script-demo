import React from 'react'
import { Link } from 'gatsby'

import Layout from '~organisms/layout'
import SEO from '~atoms/seo'
import NaturalScriptDemo from '~molecules/natural-script-demo'

const IndexPage = () => (
  <Layout>
    <SEO title="Demo" />
    <NaturalScriptDemo />
  </Layout>
)

export default IndexPage
