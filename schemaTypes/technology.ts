import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'technology',
  title: 'Technology',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),    
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),    

    defineField({
      name: 'logo',
      title: 'Project logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),    
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https'], // Restrict to HTTP/HTTPS for valid URLs
      }),      
    }),       
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent', // Ensure you already have a `blockContent` schema
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta title',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
    }),     
  ],
});
