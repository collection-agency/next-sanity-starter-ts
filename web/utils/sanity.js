import {
  groq,
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from 'next-sanity'
import Link from 'next/link'

const config = {
  /**
    * Find your project ID and dataset in `sanity.json` in your studio project.
    * These are considered “public”, but you can use environment variables
    * if you want differ between local dev and production.
    *
    * https://nextjs.org/docs/basic-features/environment-variables
    **/
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2021-08-31', // use a UTC date string
  /**
    * Set useCdn to `false` if your application require the freshest possible
    * data always (potentially slightly slower and a bit more expensive).
    * Authenticated request (like preview) will always bypass the CDN
    **/
}

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = source => {
  return createImageUrlBuilder(config).image(source)
}

// Set up the live preview subsscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config)

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...config,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {
    container: ({ children, className }) => (
      <div className={`portable-text ${className && className}`}>{children}</div>
    ),
    list: ({ props, children }) => (
      <ul className='list-disc ml-8'>{children}</ul>
    ),
    listItem: ({ props, children }) => (
      <li className='mb-2'>{children}</li>
    ),
    marks: {
      internalLink: ({mark, children}) => {
        const {slug, type} = mark
        let href = ''
        href += type === 'issue' || type === 'report' ? `/${type}s` : ''
        href += `/${slug}`
        return (
          <Link href={href}><a>{children}</a></Link>
        )
      },
      actionLink: ({mark, children}) => {
        const {slug} = mark
        return (
          <Link href={`/issues/${slug}?action`}><a>{children}</a></Link>
        )
      },
    }
  }
})

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)
// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) => (usePreview ? previewClient : sanityClient)
