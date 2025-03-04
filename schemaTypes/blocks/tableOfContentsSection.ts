import { defineField, defineType } from "sanity";

export default defineType({
  name: "tableOfContentsSection",
  title: "Table of Contents Section",
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
      description: "Unique identifier for this section.",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Main heading for the section.",
      initialValue: "Table of Contents",
    }),
  
    defineField({
        name: "includedHeadings",
        title: "Include Headings",
        type: "array",
        of: [{ type: "string" }],
        options: {
          list: [
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
          ],
          layout: "tags", // Allows users to select multiple options
        },
        initialValue: ["h2", "h3"], // Default to H2 and H3
        description: "Select which heading levels to include in the Table of Contents.",
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
