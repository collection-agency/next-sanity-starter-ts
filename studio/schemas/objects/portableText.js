export default {
  title: 'Portable Text',
  name: 'portableText',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
      ],
      marks: {
        decorators: [
          { title: 'Emphasis', value: 'em' },
          { title: 'Strong', value: 'strong' },
        ],
        annotations: [
          { type: 'link' },
        ],
      },
    },
    { type: 'figure' },
  ],
};
