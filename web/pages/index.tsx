import { getClient } from '../utils/sanity'
import { configQuery } from '../utils/queries'
import groq from 'groq'
import Link from 'next/link'

import type { NextPage } from 'next'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Container from '../components/Container'

const query = groq`
  *[_type == 'post']
`

const Landing: NextPage<{
  docs?: any
  config?: any
}> = ({ docs, config }) => {
  return (
    <Layout>
      <Seo config={config} />
      {docs && docs.length > 0 &&
        <section>
          <Container>
            <ul className='list-disc'>
              {docs.map((doc: any): React.ReactNode => {
                return (
                  <li key={doc._id}>
                    <Link href={`/${doc.slug.current}`} >
                      <a className='underline'>{doc.title}</a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Container>
        </section>
      }
    </Layout>
  )
}

export const getStaticProps = async () => {
  const docs = await getClient(true).fetch(query)
  const config = await getClient().fetch(configQuery)
  return {
    props: { docs, config } // will be passed to the page component as props
  }
}

export default Landing
