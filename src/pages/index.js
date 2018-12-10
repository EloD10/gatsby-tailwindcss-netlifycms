import React from 'react'
import { Link } from 'gatsby'

import Image from '../components/image'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1 className="mx-4 md:mx-0 mt-4 text-purple text-4xl">Hi people!</h1>
    <div className="mx-4 md:mx-0 text-purple">
      <p className="font-bold">
        Welcome to your new Gatsby site with TailwindCSS and NetlifyCMS.
      </p>
      <p className="font-semibold text-lg my-4">
        Now go build something great!
      </p>
      <Image />
    </div>
    <div className="ml-8 md:ml-0 mt-8">
      <Link
        to="/blog"
        className="border border-purple rounded py-2 px-4 bg-purple hover:bg-purple-dark text-white no-underline"
      >
        Go to blog
      </Link>
    </div>
  </Layout>
)

export default IndexPage
