// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import documents
import config from './documents/config'
import post from './documents/post'

// Import objects
import barePortableText from './objects/barePortableText'
import figure from './objects/figure'
import imageAlt from './objects/imageAlt'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'
import seoMeta from './objects/seoMeta'
import simplePortableText from './objects/simplePortableText'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    barePortableText,
    config,
    figure,
    imageAlt,
    internalLink,
    link,
    portableText,
    post,
    seoMeta,
    simplePortableText,
  ]),
})
