# cke-duplicated-modules Error
This repository reproduces the following error when developing a CKE plugin locally:

```
@authorium_ckeditor5-plugin-linking-example.js?v=35843d70:9448 Uncaught CKEditorError: ckeditor-duplicated-modules
Read more: https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html#error-ckeditor-duplicated-modules
    at @authorium_ckeditor5-plugin-linking-example.js?v=35843d70:9448:9
```

## Structure

- `app` has the application
- `ckeditor5-plugin-linking-example` has the custom plugin 

The `app` links to the plugin as follows:
```
  "dependencies": {
    "@authorium/ckeditor5-plugin-linking-example": "link:../ckeditor5-plugin-linking-example",
    "ckeditor5": "43.1.0"
  }
```

## Setup

1. Build plugin
```
cd ckeditor5-plugin-linking-example
yarn
yarn ts:build
yarn build:dist
```

2. Run the sample in the plugin repo to confirm the plugin is working as expected
```
yarn start 
```

3. Close the sample and then run app to demonstrate above error in the console
```
cd ../app
yarn 
yarn dev
```

