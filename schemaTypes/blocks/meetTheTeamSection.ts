import { defineType, defineField } from "sanity";

export default defineType({
  name: "meetTheTeamSection",
  title: "Meet the Team Section",
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
      description: "The main heading for this section.",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "A short description under the title.",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
      description: "Detailed text about the team and company.",
    }),
    defineField({
      name: "image",
      title: "Team Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Upload an image representing the team.",
    }),
    defineField({
      name: "cta",
      title: "Call to Action",
      type: "object",
      fields: [
        defineField({
          name: "text",
          title: "Button Text",
          type: "string",
          description: "The text inside the CTA button.",
        }),
        defineField({
          name: "link",
          title: "Button Link",
          type: "string",
          description: "The URL where the CTA button should navigate.",
        }),
      ],
      description: "Optional CTA button for the section.",
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
