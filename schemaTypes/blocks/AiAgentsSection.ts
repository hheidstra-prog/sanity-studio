import { defineType, defineField } from "sanity";

export default defineType({
  name: "aiAgentsSection",
  title: "AI Agents Section",
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
      description: "Main heading for the AI Agents section.",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
      description: "Subheading for the AI Agents section.",
    }),
    defineField({
      name: "cards",
      title: "AI Agent Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Card Title",
              type: "string",
              description: "Title for this AI Agent card.",
            }),
            defineField({
              name: "text",
              title: "Card Text",
              type: "text",
              rows: 3,
              description: "Short description about this AI Agent.",
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
