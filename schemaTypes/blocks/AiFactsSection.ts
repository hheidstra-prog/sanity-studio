import { defineType, defineField } from "sanity";

export default defineType({
  name: "aiFactsSection",
  title: "AI Facts Section",
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
      description: "Main heading for the Facts section.",
    }),
    defineField({
      name: "subtitle",
      title: "Sub title",
      type: "string",
      description: "Sub heading for the Facts section.",
    }),    
    defineField({
      name: "facts",
      title: "Facts",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              description: "The text.",
            }),            
            defineField({
              name: "value",
              title: "Value",
              type: "number",
              description: "The counter value.",
            }),
            defineField({
              name: "suffix",
              title: "Suffix",
              type: "string",
              description: "The suffix for the counter.",
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
