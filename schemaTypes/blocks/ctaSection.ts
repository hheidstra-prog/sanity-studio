import { defineType, defineField } from "sanity";

export default defineType({
  name: "ctaSection",
  title: "Call-to-Action Section",
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
      description: "Main heading for the CTA section.",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "Supporting text below the heading.",
    }),
    defineField({
      name: "buttonLabel",
      title: "Button Label",
      type: "string",
      description: "Text inside the CTA button.",
    }),
    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "url",
      description: "URL where the button should redirect.",
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
