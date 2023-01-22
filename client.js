import sanityClient from '@sanity/client'

// const sanityClient = require('@sanity/client')

const client = sanityClient({
    projectId: 'l2zmkoco',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: 'sanity-auth-token', // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
  })
  
  export default client

//   import imageUrlBuilder from '@sanity/image-url'

// const builder = imageUrlBuilder(client)

// const  urlFor = (source)  => {
//   return builder.image(source)
// }