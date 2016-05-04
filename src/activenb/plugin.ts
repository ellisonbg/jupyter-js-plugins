// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import {
  Application
} from 'phosphide/lib/core/application';

import {
  Widget
} from 'phosphor-widget';

import {
  ActiveNotebook
} from '../notebook/plugin';

/**
 * The activenb page extension.
 */
export
const activeNBExtension = {
  id: 'jupyter.extensions.activenb',
  activate: activateActiveNB,
  requires: [ActiveNotebook]
};

function activateActiveNB(app: Application, notebookMonitor: ActiveNotebook): Promise<void> {
  let widget = new Widget();
  widget.id = 'activenb-jupyterlab';
  widget.title.text = 'ActiveNB';
  widget.title.closable = true;
  let button = document.createElement('button');
  button.appendChild(document.createTextNode('Active Notebook'));
  widget.node.appendChild(button);
  app.shell.addToLeftArea(widget);
  button.onclick = () => {
      console.log(notebookMonitor.activeNotebook);
  };
  
  return Promise.resolve(void 0);
}
