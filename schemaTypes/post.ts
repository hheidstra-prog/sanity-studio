import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      // should match 'languageField' plugin configuration setting, if customized
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: false,
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('The  title is required.'),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required().error('The subtitle is required.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('The slug is required.'),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('The image is required.'),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required().error('The body content is required.'),
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta title',
      type: 'string',
      validation: (Rule) => Rule.required().error('The meta title is required.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().error('The meta title is required.'),
    }),   
    defineField({
      name: "bottomSections",
      title: "Bottom Sections",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "textSection" },
            { type: "featureSection" },
            { type: "newsletterSection" },
            { type: "faqSection" },
            { type: "ctaSection" },
            { type: "testimonialSection" },
            { type: "aiInsightsSection" },
            { type: "aiAgentsSection" },
            { type: "aiWorkflowSection" },
            { type: "aiFactsSection" },
            { type: "useCasesSection" },
            { type: "scheduleCallFormSection" }
          ],
        },
      ],
    }), 
    defineField({
      name: "sideSections",
      title: "Side Sections",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "socialShareSection" },
            { type: "newsletterSection" },
            { type: "tableOfContentsSection" }
          ],
        },
      ],
    }),         

  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
