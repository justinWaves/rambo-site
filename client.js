
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from "@sanity/client";


export const client = sanityClient({
    projectId: 'l2zmkoco',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: '', // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
  })



export const urlFor = (source)  => {
  return imageUrlBuilder(client).image(source)}
