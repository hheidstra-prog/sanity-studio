import { defineType, defineField } from "sanity";

export default defineType({
  name: "allArticlesSection",
  title: "All Articles Section",
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
      title: "Section Title",
      type: "string",
      description: "The heading for the Latest Articles section.",
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
