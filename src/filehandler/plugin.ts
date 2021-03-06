// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import {
  FileHandler, DocumentManager
} from 'jupyter-js-ui/lib/docmanager';

import {
  Application
} from 'phosphide/lib/core/application';

import {
  JupyterServices
} from '../services/plugin';


/**
 * The default file handler extension.
 */
export
const fileHandlerExtension = {
  id: 'jupyter.extensions.fileHandler',
  requires: [DocumentManager, JupyterServices],
  activate: (app: Application, manager: DocumentManager, services: JupyterServices) => {
    let handler = new FileHandler(services.contentsManager);
    manager.registerDefault(handler);
    return Promise.resolve(void 0);
  }
};
