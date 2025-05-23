// export default ({ env }) => ({
//   // ...
//   upload: {
//     config: {
//       provider: 'cloudinary',
//       providerOptions: {
//         cloud_name: env('CLOUDINARY_NAME'),
//         api_key: env('CLOUDINARY_KEY'),
//         api_secret: env('CLOUDINARY_SECRET'),
//       },
//       actionOptions: {
//         upload: {},
//         uploadStream: {},
//         delete: {},
//       },
//     },
//   },
//   // ...
// });

// module.exports = ({ env }) => ({
//   // ...
//   email: {
//     config: {
//       provider: 'nodemailer',
//       providerOptions: {
//         host: env('SMTP_HOST'),
//         port: env('SMTP_PORT'),
//         auth: {
//           user: env('SMTP_USERNAME'),
//           pass: env('SMTP_PASSWORD'),
//         },
//         // ... any custom nodemailer options
//       },
//       settings: {
//         defaultFrom: 'duniola4u@gmail.com',
//         defaultReplyTo: 'duniola4u@gmail.com',
//       },
//     },
//   },
//   // ...
// });


export default ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env.int('SMTP_PORT'),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        // any custom options
      },
      settings: {
        defaultFrom: 'duniola4u@gmail.com',
        defaultReplyTo: 'duniola4u@gmail.com',
      },
    },
  },
});
