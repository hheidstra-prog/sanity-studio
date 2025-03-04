import { defineType, defineField } from "sanity";

export default defineType({
  name: "useCase",
  title: "Use Case",
  type: "document",
  fields: [
    defineField({
        name: 'language',
        type: 'string',
        readOnly: true,
        hidden: false,
    }),    
    defineField({
      name: "title",
      title: "Use Case Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
          source: (doc) => `${doc.title}`, // Ensure the slug is unique per language
          maxLength: 96,
        },
      validation: (Rule) => Rule.required().error('The slug is required.'),
  }),     
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required().error('The body content is required.'),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),    
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      description: "Tags associated with this use case (must match categories).",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return {
        title: selection.title,
      };
    },
  },
});
