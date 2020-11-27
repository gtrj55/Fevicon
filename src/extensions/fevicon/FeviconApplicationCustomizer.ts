import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'FeviconApplicationCustomizerStrings';
require('./Style.css');
const LOG_SOURCE: string = 'FeviconApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IFeviconApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class FeviconApplicationCustomizer
  extends BaseApplicationCustomizer<IFeviconApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

     let url: string = this.properties.testMessage;
    // if (!message) {
    //   message = '(No properties were provided.)';
    // }
    if(!url){
      console.log(url);
      alert(url)
    }
    else{
      console.log(this.context);
      var link = document.querySelector("link[rel*='icon']") as HTMLElement || document.createElement('link') as HTMLElement;
      link.setAttribute('type', 'image/x-icon');
      link.setAttribute('rel', 'shortcut icon');
      link.setAttribute('href', this.context.pageContext.web.absoluteUrl+"/Shared%20Documents/FevIcon.jpg");
      document.getElementsByTagName('head')[0].appendChild(link);
    }

    return Promise.resolve();
  }
}
