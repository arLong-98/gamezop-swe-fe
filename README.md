This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1 - Execute **pnpm install** on terminal to install all the dependencies. 

2 - Execute **pnpm dev** to run the dev server. 

3 - Open the browser and type in the **localhost:3000** in the address bar to run the application on the local machine. 

## Development Journey

1 - The project is bootstrapped using create-next-app. 

2 - Migrated from npm to pnpm package manager. 

3 - Added a nvmrc file, to specify the node version in use. 

4 - Removed the bopilerplate code present in the next app. 

5 - Updated the tsconfig file with a few more rules. 

6 - Updated the tailwind config file for better control on the design system. 

7 - Leveraged the app directory structure provided by next js to build out pages. 

8 - Leveraged route groups to create a common layout for games page and related routes. 

9 - Took advantage of dynamic route system and getStaticPaths to generate pages during build time (pre-render pages). 

10 - Added server and client components as per the requirement. 

11 - Added PWA functionality by registering a service worker, adding a manifest.json file and the corresponding link tag to make the application downloadable on the system and cache the index route. 

12 - Added suspense to custom UI components to leverage streaming data while rest of the page is shown to the user for a better UX.
