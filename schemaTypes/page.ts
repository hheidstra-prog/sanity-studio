import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
        name: 'language',
        type: 'string',
        readOnly: true,
        hidden: false,
    }),
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required().error('The title is required.'),
    }),    
    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: (doc) => `${doc.title}-${doc.language}`, // Ensure the slug is unique per language
            maxLength: 96,
          },
        validation: (Rule) => Rule.required().error('The slug is required.'),
    }),    
    defineField({
      name: "sections",
      title: "Page Sections",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "textSection" },
            { type: "heroSection" },
            { type: "featureSection" },
            { type: "latestArticlesSection" },
            { type: "newsletterSection" },
            { type: "faqSection" },
            { type: "ctaSection" },
            { type: "testimonialSection" },
            { type: "contactFormSection" },
            { type: "allArticlesSection" },
            { type: "aiInsightsSection" },
            { type: "aiAgentsSection" },
            { type: "aiWorkflowSection" },
            { type: "aiFactsSection" },
            { type: "aboutUsSection" },
            { type: "meetTheTeamSection" },
            { type: "useCasesSection" },
            { type: "scheduleCallFormSection" },
            { type: "socialShareSection" }
          ],
        },
      ],
    }),
    defineField({
      name: 'noindex',
      title: 'No index',
      type: 'boolean',
      description: 'Prevent search engines from indexing this page',
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
        validation: (Rule) => Rule.required().error('The meta description is required.'),
    }),     
    ],
});
    