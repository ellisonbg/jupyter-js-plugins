// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import {
  Application
} from 'phosphide/lib/core/application';

import {
  Widget
} from 'phosphor-widget';


/**
 * The about page extension.
 */
export
const APODExtension = {
  id: 'jupyter.extensions.apod',
  activate: activateAPOD
};


function activateAPOD(app: Application): void {
  let widget = new Widget();
  let commandId = 'apod-jupyterlab:show';
  widget.id = 'apod-jupyterlab';
  widget.title.text = 'APOD';
  widget.title.closable = true;
  widget.node.innerHTML = `
<img src="http://apod.nasa.gov/apod/image/1605/MercuryTransit_Dierick_1500.jpg"></img>
`;
  app.shell.addToLeftArea(widget);

    // app.commands.add([{
    //   id: commandId,
    //   handler: () => {
    //     if (!widget.isAttached) app.shell.addToMainArea(widget);
    //     app.shell.activateMain(widget.id);
    //   }
    // }]);

    // app.palette.add([{
    //   command: commandId,
    //   text: 'APOD',
    //   category: 'Fun'
    // }]);
}
