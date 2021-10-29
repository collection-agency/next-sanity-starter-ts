import Head from 'next/head'
import { urlFor } from '../utils/sanity'
import { useRouter } from 'next/router'

const Seo = ({config, doc}: {
  config?: any 
  doc?: any
}) => {
  const router = useRouter()
  let metaTitle = process.env.NEXT_PUBLIC_SITE_TITLE

  if (!config && !doc) {
    return (
      <Head>
        <title>{metaTitle}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
    )
  }

  let title, seoMeta, siteTitle, siteDescription, siteUrl, defaultOpenGraphImage, social

  if (config) {
    ({ siteTitle, siteDescription, siteUrl, defaultOpenGraphImage, social } = config)
  }
  if (doc) {
    ({ title, seoMeta } = doc)
  }

  if (siteTitle || title) {
    metaTitle = (title ? title : '') + (siteTitle && title ? ' | ' : '') + (siteTitle ? siteTitle : '')
  }

  const metaDescription = seoMeta && seoMeta.description ? seoMeta.description : siteDescription

  const metaImage = seoMeta && seoMeta.openGraphImage ? seoMeta.openGraphImage : defaultOpenGraphImage
  const imageWidth = 1200
  const imageHeight = 627
  const imageUrl = metaImage ? urlFor(metaImage).width(imageWidth).height(imageHeight).fit('crop').crop('entropy').url() : ''
  const metaImageUrl = metaImage && imageUrl ? imageUrl : undefined

  const twitterHandle = social && social.twitter ? `@${social.twitter}` : undefined

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name='description' content={metaDescription} />

      <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />

      <meta property='og:title' content={metaTitle} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content={siteTitle} />
      <meta property='og:locale' content='en_US' />

      <meta property='og:image' content={metaImageUrl} />
      <meta property='og:image:secure_url' content={metaImageUrl} />
      <meta property='og:image:width' content={imageWidth.toString()} />
      <meta property='og:image:height' content={imageHeight.toString()} />

      <meta name='twitter:card' content={metaImage ? 'summary_large_image' : 'summary'} />
      <meta name='twitter:title' content={metaTitle} />
      <meta name='twitter:description' content={metaDescription} />
      <meta name='twitter:site' content={twitterHandle} />
      <meta name='twitter:image' content={metaImageUrl} />
      <meta name='twitter:creator' content={twitterHandle} />

      <link rel='canonical' href={siteUrl + router.asPath} />
    </Head>
  )
}

export default Seo
