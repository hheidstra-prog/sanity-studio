import { defineType, defineField } from "sanity";

export default defineType({
  name: "newsletterSection",
  title: "Newsletter Section",
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
      description: "Main heading for the newsletter section.",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
      description: "Subtitle for the newsletter section.",
    }),
    defineField({
        name: "actiontext",
        title: "Action text",
        type: "string",
        description: "Text next to the email icon.",
      }),    
    defineField({
      name: "buttonLabel",
      title: "Button Label",
      type: "string",
      description: "Label for the subscribe button.",
    }),
    defineField({
      name: "emailPlaceholder",
      title: "Email Placeholder",
      type: "string",
      description: "Placeholder text for the email input field.",
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
