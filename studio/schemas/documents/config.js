export default {
  name: 'config',
  type: 'document',
  title: 'Site Config',
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  //__experimental_actions: ['update', 'publish'],
  fieldsets: [
  ],
  fields: [
    {
      name: 'siteTitle',
      type: 'string',
      title: 'Site title',
    },
    {
      title: 'URL',
      name: 'siteUrl',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
      validation: Rule => Rule.required(),
    },
    {
      name: 'siteDescription',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      rows: 3
    },
    {
      name: 'defaultOpenGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
    },
    {
      title: 'Contact email',
      name: 'contactEmail',
      type: 'string',
      description: 'Main contact email. Used in footer and as a fallback elsewhere',
    },
    {
      title: 'Brand logo',
      description:
        'Best choice is to use an SVG where the color are set with currentColor',
      name: 'logo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: 'social',
      type: 'object',
      title: 'Social Networks',
      options: {
        collapsible: true
      },
      fields: [
        {
          name: 'twitter',
          type: 'string',
          title: 'Twitter handle',
        },
        {
          name: 'instagram',
          type: 'string',
          title: 'Instagram handle',
        },
        {
          name: 'facebook',
          type: 'string',
          title: 'Facebook handle',
        },
      ]
    },
  ],
  initialValue: {
    siteTitle: 'Starter',
    siteUrl: 'http://localhost:3000'
  },
  preview: {
    prepare() {
      return {
        title: 'Global site config',
      }
    }
  }
};
