import { defineType, defineField } from "sanity";

export default defineType({
  name: "scheduleCallFormSection",
  title: "Schedule Call Form Section",
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
        name: "name",
        title: "Name Placeholder",
        type: "string",
        description: "Name field placeholder.",
      }),
      defineField({
        name: "surname",
        title: "Surname Placeholder",
        type: "string",
        description: "Name field placeholder.",        
      }),
      defineField({
        name: "phone",
        title: "Phone Placeholder",
        type: "string",
        description: "Name field placeholder.",        
      }),
      defineField({
        name: "email",
        title: "Email Placeholder",
        type: "string",
        description: "Name field placeholder.",        
      }),
      defineField({
        name: "message",
        title: "Message Placeholder",
        type: "string",
        description: "Name field placeholder.",
      }),
      defineField({
        name: "calltext",
        title: "Appointment text",
        type: "string",
        description: "text above the schedule data and time fields.",
      }),       
      defineField({
        name: "button",
        title: "Button label",
        type: "string",
        description: "Name field placeholder.",
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
