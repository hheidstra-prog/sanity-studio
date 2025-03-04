import { defineType, defineField } from "sanity";

export default defineType({
  name: "featureSection",
  title: "Feature Section",
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
      description: "Enter the title for this section.",
    }),
    defineField({
      name: "introText",
      title: "Intro Text",
      type: "blockContent",
      description: "Enter the introduction text for this section.",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "The image for the feature section.",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "cards",
      title: "Feature Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              description: "Set the name of the icon.",
            }),
            defineField({
              name: "title",
              title: "Card Title",
              type: "string",
              description: "Enter the title for this card.",
            }),
            defineField({
              name: "content",
              title: "Card Content",
              type: "blockContent",
              description: "Enter the content for this card.",
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
