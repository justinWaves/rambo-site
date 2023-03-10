import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'musicReleases',
  title: 'Music Releases',
  type: 'document',
  fields: [
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
        name: 'trackURL',
        title: 'Track URL',
        type: 'string',
      }),


    defineField({
      name: 'trackImage',
      title: 'Track Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),



  ],


})