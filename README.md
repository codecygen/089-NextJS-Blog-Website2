# Blog Project

## 1.1 Optimization and Deployment Steps for Next.js

### 1.1.1 Manual Optimization
- Add page metadata, optimize code, remove unnecessary dependencies.
- Use environment variables for data (e.g database credentials, API keys etc.). For environmental variables, the data can either be stored in **.env.local** or **next.config.js**.

### 1.1.2 Testing
- Do a test buld and test the production-ready app locally or on a test server.

### 1.1.3 Automatic Optimization

There are 2 ways of deployment. These are,

#### Standard Build
- **next build** or **npm run build** command.
- Produces optimized production bundles and a server-side app. Requires NodeJS server.
- Pages are pre-rendered (if possible), but NodeJS server is required for API routes, server-side pages and page revalidations.
- Re-deployment needed if code changes or you don't use revalidations and need page updates.

For this specific case, once we run "npm run build" command, the output down on the bottom is displayed.

```diff
Why you should do it regularly:
https://github.com/browserslist/browserslist#browsers-data-updating
info  - Creating an optimized production build  
info  - Compiled successfully
info  - Collecting page data  
info  - Generating static pages (6/6)
info  - Finalizing page optimization  

Page                                                           Size     First Load JS
┌ ● /                                                          1.97 kB        73.2 kB
├   └ css/1e9fb58c203b31c361f2.css                             585 B
├   /_app                                                      0 B            66.8 kB
├ ○ /404                                                       3.46 kB        70.3 kB
├ λ /api/contact                                               0 B            66.8 kB
├ ○ /contact                                                   3.39 kB        70.2 kB
├   └ css/dce8f9d13dbc51bac6a3.css                             715 B
├ ● /posts                                                     1.82 kB        73.1 kB
├   └ css/5c143cb7d99287f02612.css                             443 B
└ ● /posts/[slug]                                              284 kB          355 kB - text in red
    └ css/71aaee323b3ce5ce4be9.css                             452 B
    ├ /posts/another-blog-post
    └ /posts/new-blog-post
+ First Load JS shared by all                                  66.8 kB
  ├ chunks/365e2c93ee4512644b764144cea69ab374a79a06.ae833e.js  10.7 kB
  ├ chunks/ab991c0a337eaf832b1db71bb0078ca34bd7cb6b.37a42c.js  3.17 kB
  ├ chunks/framework.0c2392.js                                 42.1 kB
  ├ chunks/main.901106.js                                      6.32 kB
  ├ chunks/pages/_app.b425e1.js                                3.8 kB
  ├ chunks/webpack.50bee0.js                                   751 B
  └ css/d4cd8750a77b2ca7160e.css                               797 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
   (ISR)     incremental static regeneration (uses revalidate in getStaticProps)
```

The console output above normally highlighted "355kb" with red in the actual Linux terminal. This is an indication that we might have heavy dependencies installed for the slug page.
```
/posts/[slug]                                              284 kB          355 kB - text in red kB
```

#### Full Static Build
- **next export** command. This has to be added to the **"scripts"** section of the **package.json**. The entry should be written as **"export": "next export"**.
- Produces 100% static app (HTML, CSS, JS): No NodeJS server required.
- Does not work if your app uses API routes, server-side pages or wants to use page revalidations.
- Re-deployment needed for all code and content changes.

### 1.1.4 Deployment

## 1.2 Other Deployment Notes Specific to this Project
If you are using npm package, use the following instructions:
- Create **.env.local** file to the root directory of the project. The only environmental variable for the file is **MONGODB_ATLAS_LINK**. Once the database is created, you have to find the link to "Connect your application". Then add it into the .env.local file. An example of the content of env.local file is given down below.

For more information you can refer to [MongoDB Atlas Documentation](https://www.mongodb.com/docs/manual/tutorial/getting-started/).

```
MONGODB_ATLAS_LINK=mongodb+srv://<username>:<password>@some-blog.8hxik6m.mongodb.net/<databaseName>?retryWrites=true&w=majority
```

Alternatively, you can use **next.config.js** to store environmental variables. The file has to be created on root directory of the project. Then the content should be like,

```javascript
// Environmental-Variable-Storing-in-next.config.js-File

// Used if we use the export command
// const { PHASE_EXPORT } = require('next/constants');

// Used if we run 'npm run dev'
const { PHASE_DEVELOPMENT_SERVER} = require('next/constants');

// Used if we run 'npm run build'
// const { PHASE_PRODUCTION_BUILD } = require('next/constants');

// Used after we build, for the server side code once our server is up and running
const { PHASE_PRODUCTION_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'testName',
                mongodb_password: 'testPassword',
                mongodb_clustername: 'testCluster',
                mongodb_database: 'testDatabase'
            }
        };
    }

    return {
        env: {
            mongodb_username: 'aras',
            mongodb_password: 'realPassword',
            mongodb_clustername: 'realCluster',
            mongodb_database: 'realDatabase'
        }
    };
};
```

After that you can use it in a component file like

```javascript
    const nextConfigJsEnvVariables = `${process.env.mongodb_username}${process.env.mongodb_password}${process.env.mongodb_clustername}${process.env.mongodb_database}`;
```

- Run **npm i** to install dependencies.

- Run **npm run build** to optimize the project for production.

- Once the environmental variable is created, run **npm start** to start the server.

- If you are in development environment, do not forget to restart server once you create the .env.local file.

## 1.3 Keywords
### Markdown-To-HTML
### Read-from-Markdown-Convert-HTML
The npm package name to read from an md file and convert it to an HTML is **react-markdown**. Make sure to install version 5.0.3. **npm i react-markdown@5.0.3**
### Read-from-Markdown-Split-Metadata-and-Actual-Markdown-Content
The npm package to do it is **gray-matter**.
### Gray-Matter-Custom-Renderers-to-Use-Image-Component-of-NextJS
As stated in the keyword, if we search we can see gray-matter npm library has a property for ReactMarkdown component to pass Image component of NextJS so that we don't use classic image tag of HTML for better optimization.
### react-syntax-higlighter-Code-Snippet-Styling
react-syntax-higlighter npm library is useful if you have a code snippet in your markdown file. The react-syntax-higlighter npm library will be used to style the code snippet when it is transformed into html.
### Front-End-Fetching-Error-Handling-Data-Verification-and-User-Notification
Front end data sending. This section is for contact info sending to the database. It covers all the error handling and user notification about if the data is already sent or if there has been an error. The data is also verified if the email and message sent correctly.
### Back-End-Posting-Darta-to-Database-Error-Handling-Data-Verification
Backend data sending. This section is for contact info sending to the database. It covers all the error handling about if the data is already sent or if there has been an error. The data is also verified if the email and message sent correctly.
### Environmental-Variable-Storing-in-next.config.js-File
Environmental variables can be stored inside **.env.local** in the root directory of a NextJS project, as well as inside **next.config.js**