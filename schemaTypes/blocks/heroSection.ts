import { defineType, defineField } from "sanity";

export default defineType({
  name: "heroSection",
  title: "Hero Section",
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
      name: "heading",
      title: "Heading",
      type: "string",
      description: "The main heading for the hero section.",
    }),
    defineField({
      name: "introText",
      title: "Intro Text",
      type: "blockContent",
      description: "The introductory text for the hero section.",
    }),
    defineField({
      name: "callToActionTitle",
      title: "Call-to-Action Title",
      type: "string",
      description: "The title for the call-to-action form.",
    }),
    defineField({
      name: "emailPlaceholder",
      title: "Email Placeholder",
      type: "string",
      description: "The placeholder text for the email input field.",
    }),
    defineField({
      name: "websitePlaceholder",
      title: "Website Placeholder",
      type: "string",
      description: "The placeholder text for the website input field.",
    }),
    defineField({
      name: "buttonLabel",
      title: "Button Label",
      type: "string",
      description: "The label for the form's submit button.",
    }),
    defineField({
      name: "textBelowFields",
      title: "Text Below Fields",
      type: "string",
      description: "The text displayed below the website field.",
    }),
    defineField({
      name: "logosLabel",
      title: "Label Above Logos",
      type: "string",
      description: "The label text shown above the logos.",
    }),
    defineField({
      name: "image",
      title: "Background/Image",
      type: "image",
      description: "The background or side image for the hero section.",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Alt text for accessibility & SEO.",
        }),
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
