// studio-potfolio/schemaTypes/projectType.ts

const projectType = {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
      },
      {
        name: "shortDescription",
        title: "Short Description",
        type: "text",
      },
      {
        name: "fullDescription",
        title: "Full Description",
        type: "array",
        of: [{ type: "block" }],
      },
      {
        name: "image",
        title: "Main Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "gallery",
        title: "Gallery Images",
        type: "array",
        of: [{ type: "image" }],
      },
      {
        name: "dateCompleted",
        title: "Date Completed",
        type: "date",
      },
      {
        name: "type",
        title: "Project Type",
        type: "string",
        options: {
          list: [
            { title: "Interior", value: "interior" },
            { title: "Balcony", value: "balcony" },
            { title: "Landscape", value: "landscape" },
          ],
        },
      },
    ],
  };
  
  export default projectType;
  