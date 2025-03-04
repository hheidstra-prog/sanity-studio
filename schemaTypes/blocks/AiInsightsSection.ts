import { defineType, defineField } from "sanity";

export default defineType({
  name: "aiInsightsSection",
  title: "AI Insights Section",
  type: "document",
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: false,
    }),   
    defineField({
      name: "identifier",
      title: "Identifier",
      type: "string",
      description: "The identifier for this section.",
    }),      
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Main heading for the FAQ section.",
    }),
    defineField({
      name: "insights",
      title: "Insights",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "header",
              title: "Header",
              type: "string",
              description: "The Insight header.",
            }),
            defineField({
              name: "insight",
              title: "Insight",
              type: "text",
              rows: 3,
              description: "The AI insight text.",
            }),
          ],
        },
      ],
      description: "List of AI Insights.",
    }),
  ],
  preview: {
    select: {
      identifier: "identifier",
      language: "language",
    },
    prepare(selection) {
      const { identifier, language } = selection;
      return {
        title: `${identifier} (${language.toUpperCase()})`, // Example: "Newsletter Signup (EN)"
      };
    },
  },  
});
