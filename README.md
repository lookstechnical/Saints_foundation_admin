# Gatsby Auth starter with AWS Amplify for TypeScript

For a tutorial, see this [blog post](https://www.nyxo.app/gatsby-netlify-amplify-part-2).

This auth starter implements a basic authentication flow for signing up signing in users as well as protected client side routing using [AWS Amplify](https://amplify.aws). Auth features:

- User sign up
- User sign in
- Multi-factor Authentication
- User sign-out

![Gatsby Amplify](src/images/gatby-auth.gif)

# Deploy to the Amplify console

Click the button to deploy a fullstack app in your AWS account:

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/dabit3/gatsby-auth-starter-aws-amplify)

You can now continuously deploy changes to your frontend or backend and Amplify Console will automatically deploy those changes.

<!-- <img src="https://github.com/swaminator/gatsby-auth-starter-aws-amplify/blob/master/src/images/amplify-console.gif" width="800"/> -->

![Amplify Console](src/images/amplify-console.gif)

# Run locally

1. Create the project

```sh
gatsby new gatsby-amplify-auth https://github.com/hello-nyxo/gatsby-auth-amplify-with-typescript
```

2. Change into the new directory

```sh
cd gatsby-amplify-auth
```

3. Change into the new directory

```sh
yarn
# or
npm install
```

4. Install & configure the AWS Amplify CLI.

```sh
npm install -g @aws-amplify/cli

amplify configure
```

> To see a video of how to configure the CLI, click [here](https://www.youtube.com/watch?v=fWbM5DLh25U)

5. Create a new AWS Amplify Project

```
amplify init
```

> Here, walk through the following steps:

- Enter a name for the project **YOURPROJECTNAME**
- Enter a name for the environment **master**
- Choose your default editor: **Visual Studio Code** (or your editor of choice)
- Choose the type of app that you're building **javascript**
- What javascript framework are you using **react**
- Source Directory Path: **src**
- Distribution Directory Path: **public**
- Build Command: **npm run-script build**
- Start Command: **npm run-script develop**

6. Push the updated project configuration to AWS. It will deploy a CloudFormation template that has an Amazon Cognito resource that enables user authentication.

```sh
amplify push
```

7. Then you can run it by:

```sh
gatsby develop
```

# Sources

The template is fork of the original gatsby-auth-starter by Nader Dabit [https://github.com/dabit3/gatsby-auth-starter-aws-amplify](https://github.com/dabit3/gatsby-auth-starter-aws-amplify) with updated packages and typescript support.
