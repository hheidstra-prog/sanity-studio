import { defineType, defineField } from "sanity";

export default defineType({
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The name of the menu (for internal use).",
    }),
    defineField({
        name: "id",
        title: "Id",
        type: "string",
        description: "The ID the menu (e.g. main, etc).",
      }),    
    defineField({
        name: "language",
        title: "Language",
        type: "string",
        readOnly: true, // Set automatically by the localization plugin
      }),    
    defineField({
      name: "items",
      title: "Menu Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description: "Text to display for this menu item.",
            }),
            defineField({
              name: "link",
              title: "Link",
              type: "string",
              description: "URL or internal link for this menu item.",
            }),
            defineField({
              name: "subMenu",
              title: "Submenu",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "label",
                      title: "Label",
                      type: "string",
                      description: "Text to display for this submenu item.",
                    }),
                    defineField({
                      name: "link",
                      title: "Link",
                      type: "url",
                      description: "URL or internal link for this submenu item.",
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
});
