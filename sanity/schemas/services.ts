import { defineField } from "sanity"
export default {
    name: "services",
    title: "Services",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name: "logo",
            title: "Logo",
            type: "image"
        },
    ]
}