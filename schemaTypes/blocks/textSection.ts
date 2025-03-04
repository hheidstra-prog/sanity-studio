import { defineType, defineField } from "sanity";

export default defineType({
  name: "textSection",
  title: "Text Section",
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
      type: "text",
      rows: 3,
      description: "Title for this section.",
    }),
    defineField({
        name: 'content',
        title: 'Content',
        type: 'blockContent',
        description: "Enter the content for this page.",        
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
