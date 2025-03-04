import { defineType, defineField } from "sanity";

export default defineType({
  name: "useCasesSection",
  title: "Use Cases Section",
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
      description: "Main heading for the use cases section.",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
      description: "Short description for the use cases section.",
    }),
    defineField({
      name: "buttonText",
      title: "Button text",
      type: "string",
      description: "Button lable.",
    }),    
    defineField({
        name: "categories",
        title: "Filter Categories",
        type: "array",
        of: [{ type: "reference", to: [{ type: "category" }] }],
        description: "List of selectable categories for filtering use cases.",
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
