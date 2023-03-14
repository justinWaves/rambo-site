import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'promoPage',
  title: 'Promo Page',
  type: 'document',
  fields: [
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'promoURL',
      title: 'URL for Promo item link',
      type: 'string',
    }),


    defineField({
      name: 'promoImage',
      title: 'Promo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),



  ],


})
