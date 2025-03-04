import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutUsSection",
  title: "About Us Section",
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
      description: "Main heading for the section.",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "A short supporting sentence.",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
      description: "Detailed description of the company.",
    }),
    defineField({
      name: "statistics",
      title: "Company Statistics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Value", type: "string" }, // e.g., "$150M"
            { name: "label", title: "Label", type: "string" }, // e.g., "Raised"
          ],
        },
      ],
      description: "Key statistics about the company.",
    }),
    defineField({
      name: "images",
      title: "Team Images",
      type: "array",
      of: [{ type: "image" }],
      description: "Upload images to display alongside text.",
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
