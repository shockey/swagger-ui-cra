# swagger-ui-cra

This is an example of consuming `swagger-ui-react` in a `create-react-app` application.

Take a look at `src/App.js`, `src/CustomLayout.js` and `src/CustomWrapLayout.js` - that's where the changes from the base CRA boilerplate are.

### How to develop against `swagger-ui-react`

> I want to test and make changes locally in SwaggerUI, and test functionality via swagger-ui-react. How do I set this up?

1. From Swagger UI, run `npm run build` to generate new artifacts.
2. From Swagger UI, change directories to `./flavors/swagger-ui-react` and then run `NPM_TOKEN= ./release/run.sh`.
3. From your React app repository (i.e. here), run `npm link /path/to/swagger-ui/flavors/swagger-ui-react/dist`.
4. Run your React app, and observe that your Swagger UI changes are visible.

There's no watch daemon for this workflow, so you'll need to repeat these steps for each change you make (with the possible exception of restarting your React app's dev server, depending on whether it can detect changes to `npm link`ed module assets).

If you _really_ want watch capabilities, you may be able to achieve it by:
- customizing Swagger UI's Webpack builds with `--watch` to rebuild the UI on change
- Symlinking Swagger UI's `/dist` artifacts to `/flavors/swagger-ui-react/dist`
