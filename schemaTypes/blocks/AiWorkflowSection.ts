import { defineType, defineField } from "sanity";

export default defineType({
  name: "aiWorkflowSection",
  title: "AI Workflows Section",
  type: "object",
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
      description: "Main heading for the section.",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
      description: "Subheading for the section.",
    }),
    defineField({
      name: "cards",
      title: "Workflow Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Card Title",
              type: "string",
              description: "Title for this card.",
            }),
            defineField({
              name: "text",
              title: "Card Text",
              type: "blockContent",
              description: "Short description.",
            }),
            defineField({
              name: "image",
              title: "Card Image",
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: "alt",
                  title: "Alternative Text",
                  type: "string",
                  description: "Alt text for accessibility & SEO.",
                }),
              ],
            }),
          ],
        },
      ],
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
