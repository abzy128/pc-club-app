// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";
import {shell} from 'electron'

contextBridge.exposeInMainWorld('exec', {
    chrome : (path: string) => ipcRenderer.invoke('chrome', path),
})