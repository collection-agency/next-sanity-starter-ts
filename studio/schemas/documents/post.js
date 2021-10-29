export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'seoMeta',
      title: 'SEO & Metadata',
      type: 'seoMeta'
    },
  ],

  initialValue: {
    seoMeta: {
      _type: 'seoMeta',
      includeInSitemap: true,
      disallowRobots: false
    }
  },

  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
};
