import React from 'react';

const InternalLinkRender = ({ children }) => <span>{children} 🔗</span>;

export default {
  title: 'Internal link to another document',
  name: 'internalLink',
  type: 'reference',
  description: 'Locate a document you want to link to',
  to: [
    { type: 'post' },
  ],
  blockEditor: {
    icon: () => '🔗',
    render: InternalLinkRender,
  },
};
