import { defineField, defineType } from "sanity";

export default defineType({
  name: "socialShareSection",
  title: "Social Share Settings",
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
        type: "string",
        description: "A short supporting sentence.",
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
