
# Angular Azure Media Player

An Azure Media Player component for Angular.

[![NPM](https://img.shields.io/npm/v/ng-amp.svg)](https://www.npmjs.com/package/ng-amp)

## Overview

[Azure Media Player (AMP)](http://amp.azure.net/libs/amp/latest/docs/index.html) is a web video player built to playback media content from [Azure Media Services](https:/docs.microsoft.com/en-us/azure/media-services/) on a wide variety of browsers and devices. This project provides an angular component that wraps the raw js/css player for basic use cases.

To use this component, you must first [upload a video to media services, encode it, and get a streaming endpoint](https://docs.microsoft.com/en-us/azure/media-serviceslatest/manage-assets-quickstart). For more details, take a look at the

## Usage

### Step 1: Install the `ng-amp` package

```bash
npm install --save ng-amp
```

### Step 2: Import the NgAmpModule

```ts
import { NgAmpModule } from  'ng-amp'
@NgModule({
  declarations: [AppComponent],
  imports: [NgAmpModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Step 3: Use the module

```html
<ng-amp
  src="//amssamples.streaming.mediaservices.windows.net/3b970ae0-39d5-44bd-b3a3-3136143d6435/AzureMediaServicesPromo.ism/manifest"
  [controls]="true"
  [autoplay]="true"
  width="640"
  height="360"
  [fluid]="false"
  >
</ng-amp>
```

## Configuration

This package exposes the commonly-used configuration from the media player. You can find detailed explanations for each option on the [AMP documentation](https://ampazure.net/libs/amp/latest/docs/index.html#options).
| Input  | Type | Default | Required | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| src | string  | none | yes | URL to the manifest for the asset |
| [controls] | boolean  | true | no | Whether or not the player has controls that the user can interact with |
| [autoplay] | boolean  | false | no | Controls if the video will start playing as soon as page is loaded |
| poster | string  | none | no | The image that displays before the video begins playing |
| width | number | none | no | Display width of the video |
| height | number | none | no | Display height of the video |
| [fluid] | boolean | false | no | Controls if video element will take full width of the parent container |

## Contributing

Run these commands from the root (ng-azure-media-player) of the repo.

### Build the library

```bash
ng build ng-amp
```
This step must be repeated every time a change is made to the library.

### Build and serve the host project

```bash
ng serve
```
The host project should now be hosted at `http://localhost:4200`.

### Publish the library

```bash
npm run package
cd dist/ng-amp/
npm publish
```
