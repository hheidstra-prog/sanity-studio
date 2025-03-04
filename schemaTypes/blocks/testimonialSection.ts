import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonialSection",
  title: "Testimonial Section",
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
      description: "Heading for the testimonials section.",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "Subtitle or description for the FAQ section.",
    }),    
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "role",
              title: "Role/Position",
              type: "string",
              description: "E.g., CEO, Customer, etc.",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "quote",
              title: "Quote",
              type: "text",
              description: "The testimonial text.",
            },
          ],
        },
      ],
      description: "List of testimonials with images and text.",
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
