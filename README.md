![eCredits Docs Header](static/img/eCredits_Docs_Header.jpg)

# eCredits Documentation

This repository contains the **eCredits documentation**. 
It uses [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Local Development
We're using react-player to show videos on the page. This needs to be installed before running the dev environment.
See the [npm package](https://www.npmjs.com/package/react-player) for more information.

Once done, you can launch your local instance with the following command in the project root:

```
$ npm run start
```
### Build
If we need to build the page for deployment, we can do so by running the following command in the project root. 
```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment
The documentation is deployed to github pages via a github action. Detailed information on how to do that can be found in the [Docusaurus Documentation](https://docusaurus.io/docs/deployment#deploying-to-github-pages), thus I'll just highlight some important discoveries here.

- In order to have a custom domain, we need to put a file called ```CNAME```, containing the domain name into the static folder. Otherwhise the custom domain will always be reste on deployment.
- In the file ```docusaurus.config.js``` we need to set ```baseUrl``` to ```/```
- Files for the github actions go to the ```.github/workflows``` folder in the root directory of the project.
- For the CNAME validation to work, the cloudflare proxy needs to be disabled.
- When that is properly setup, each push to the main branch, will cause the action to build and deploy a new version. So when changing things, make sure to use proper branching for tests!