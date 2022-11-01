# Blog Project

## 1.1 Optimization and Deployment
If you are using npm package, use the following instructions:
- Create **.env.local** file to the root directory of the project. The only environmental variable for the file is **MONGODB_ATLAS_LINK**. Once the database is created, you have to find the link to "Connect your application". Then add it into the .env.local file. An example of the content of env.local file is given down below.

For more information you can refer to [MongoDB Atlas Documentation](https://www.mongodb.com/docs/manual/tutorial/getting-started/).

```
MONGODB_ATLAS_LINK=mongodb+srv://<username>:<password>@some-blog.8hxik6m.mongodb.net/<databaseName>?retryWrites=true&w=majority
```

- Run **npm i** to install dependencies.

- Run **npm run build** to optimize the project for production.

- Once the environmental variable is created, run **npm start** to start the server.

- If you are in development environment, do not forget to restart server once you create the .env.local file.

There are 2 ways of deployment. These are,

### Standard Build
- **next build** command.
- Produces optimized production bundles and a server-side app. Requires NodeJS server.
- Pages are pre-rendered (if possible), but NodeJS server is required for API routes, server-side pages and page revalidations.
- Re-deploy needed if code changes or you don't use revalidations and need page updates.

### Full Static Build
- **next export** command. This has to be added to the **"scripts"** section of the **package.json**. The entry should be written as **"export": "next export"**.
- Produces 100% static app (HTML, CSS, JS): No NodeJS server required.

## 1.2 Keywords
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