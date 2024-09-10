// This file is generated by `reactive-meta-gen`. Do not modify manually.
// @see https://github.com/calmripple/reactive-meta-gen

// Meta info

import { defineConfigObject, defineConfigs, useCommand } from 'reactive-vscode'

export const publisher = "cnjimbo"
export const name = "project-config"
export const version = "1.1.2"
export const displayName = "Project Config Updater"
export const description = "Export current settings to workspace config file "
export const extensionId = `${publisher}.${name}`

/**
 * Type union of all commands
 */
export type CommandKey = 
  | "project-config.manualUpdate"
  | "project-config.change-annnotations"
  | "project-config.stop-watch"
  | "extension.emeraldwalk.enableRunOnSave"
  | "extension.emeraldwalk.disableRunOnSave"

/**
 * Commands map registed by `cnjimbo.project-config`
 */
export const commands = {
  /**
   * Update config now
   * @value `project-config.manualUpdate`
   * @example
   * useCommand(commands.manualUpdate, async () => {
   *   //do actions or update config 
   * })
   */
  manualUpdate: "project-config.manualUpdate",
  /**
   * change annotations
   * @value `project-config.change-annnotations`
   * @example
   * useCommand(commands.changeAnnnotations, async () => {
   *   //do actions or update config 
   * })
   */
  changeAnnnotations: "project-config.change-annnotations",
  /**
   * stop watch
   * @value `project-config.stop-watch`
   * @example
   * useCommand(commands.stopWatch, async () => {
   *   //do actions or update config 
   * })
   */
  stopWatch: "project-config.stop-watch",
  /**
   * Run On Save: Enable
   * @value `extension.emeraldwalk.enableRunOnSave`
   * @example
   * useCommand(commands.extensionEmeraldwalkEnableRunOnSave, async () => {
   *   //do actions or update config 
   * })
   */
  extensionEmeraldwalkEnableRunOnSave: "extension.emeraldwalk.enableRunOnSave",
  /**
   * Run On Save: Disable
   * @value `extension.emeraldwalk.disableRunOnSave`
   * @example
   * useCommand(commands.extensionEmeraldwalkDisableRunOnSave, async () => {
   *   //do actions or update config 
   * })
   */
  extensionEmeraldwalkDisableRunOnSave: "extension.emeraldwalk.disableRunOnSave",
} satisfies Record<string, CommandKey>
/**
 * Update config now
 * @value `project-config.manualUpdate`
 */
export function useCommandManualUpdate(callback: (...args: any[]) => any) {
  useCommand(commands.manualUpdate, callback)
}
/**
 * change annotations
 * @value `project-config.change-annnotations`
 */
export function useCommandChangeAnnnotations(callback: (...args: any[]) => any) {
  useCommand(commands.changeAnnnotations, callback)
}
/**
 * stop watch
 * @value `project-config.stop-watch`
 */
export function useCommandStopWatch(callback: (...args: any[]) => any) {
  useCommand(commands.stopWatch, callback)
}
/**
 * Run On Save: Enable
 * @value `extension.emeraldwalk.enableRunOnSave`
 */
export function useCommandExtensionEmeraldwalkEnableRunOnSave(callback: (...args: any[]) => any) {
  useCommand(commands.extensionEmeraldwalkEnableRunOnSave, callback)
}
/**
 * Run On Save: Disable
 * @value `extension.emeraldwalk.disableRunOnSave`
 */
export function useCommandExtensionEmeraldwalkDisableRunOnSave(callback: (...args: any[]) => any) {
  useCommand(commands.extensionEmeraldwalkDisableRunOnSave, callback)
}


/**
 * Config keys of `project-config`
 */
export interface ProjectConfig {
  /**
   * Fetch and update the latest config automatically
   * @default true
   */
  "fileNestingUpdater.autoUpdate": boolean,
  /**
   * Should show up the prompt before doing auto update
   * @default true
   */
  "fileNestingUpdater.promptOnAutoUpdate": boolean,
  /**
   * The minimal interval for auto update, in minutes
   * @default 4320
   */
  "fileNestingUpdater.autoUpdateInterval": number,
  /**
   * The upstream repo you want to update from
   * @default "antfu/vscode-file-nesting-config"
   */
  "fileNestingUpdater.upstreamRepo": string,
  /**
   * The branch name of upstream repo
   * @default "main"
   */
  "fileNestingUpdater.upstreamBranch": string,
}

/**
 * Scoped defaults of `project-config`
 */
const _projectConfig = {
  /**
   * scope: `project-config`
   */
  scope: "project-config",
  /**
   * Keys' defaults of `project-config`
   */
  defaults: {
    /**
     * Fetch and update the latest config automatically
     */
    "fileNestingUpdater.autoUpdate": true,
    /**
     * Should show up the prompt before doing auto update
     */
    "fileNestingUpdater.promptOnAutoUpdate": true,
    /**
     * The minimal interval for auto update, in minutes
     */
    "fileNestingUpdater.autoUpdateInterval": 4320,
    /**
     * The upstream repo you want to update from
     */
    "fileNestingUpdater.upstreamRepo": "antfu/vscode-file-nesting-config",
    /**
     * The branch name of upstream repo
     */
    "fileNestingUpdater.upstreamBranch": "main",
  } satisfies ProjectConfig,
}

/**
 * Reactive ConfigObject of `project-config`
 * @example
 * let configValue = projectConfigConfigObject.fileNestingUpdater.autoUpdate //get value 
 * projectConfigConfigObject.fileNestingUpdater.autoUpdate = true // set value
 * projectConfigConfigObject.$update("fileNestingUpdater.autoUpdate", !configValue, ConfigurationTarget.Workspace, true)
 */
export const projectConfigConfigObject = defineConfigObject<ProjectConfig>(
  _projectConfig.scope,
  _projectConfig.defaults
)
/**
 * Reactive ToConfigRefs of `project-config`
 * @example
 * let configValue:boolean =projectConfigConfigs.fileNestingUpdater.autoUpdate.value //get value 
 * projectConfigConfigs.fileNestingUpdater.autoUpdate.value = true // set value
 * //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
 * projectConfigConfigs.fileNestingUpdater.autoUpdate.update(true, ConfigurationTarget.WorkspaceFolder, true)
 */
export const projectConfigConfigs = defineConfigs<ProjectConfig>(
  _projectConfig.scope,
  _projectConfig.defaults
)

/**
 * Config keys of `project-config.fileNestingUpdater`
 */
export interface FileNestingUpdater {
  /**
   * Fetch and update the latest config automatically
   * @default true
   */
  "autoUpdate": boolean,
  /**
   * Should show up the prompt before doing auto update
   * @default true
   */
  "promptOnAutoUpdate": boolean,
  /**
   * The minimal interval for auto update, in minutes
   * @default 4320
   */
  "autoUpdateInterval": number,
  /**
   * The upstream repo you want to update from
   * @default "antfu/vscode-file-nesting-config"
   */
  "upstreamRepo": string,
  /**
   * The branch name of upstream repo
   * @default "main"
   */
  "upstreamBranch": string,
}

/**
 * Scoped defaults of `project-config.fileNestingUpdater`
 */
const _fileNestingUpdater = {
  /**
   * scope: `project-config.fileNestingUpdater`
   */
  scope: "project-config.fileNestingUpdater",
  /**
   * Keys' defaults of `project-config.fileNestingUpdater`
   */
  defaults: {
    /**
     * Fetch and update the latest config automatically
     */
    "autoUpdate": true,
    /**
     * Should show up the prompt before doing auto update
     */
    "promptOnAutoUpdate": true,
    /**
     * The minimal interval for auto update, in minutes
     */
    "autoUpdateInterval": 4320,
    /**
     * The upstream repo you want to update from
     */
    "upstreamRepo": "antfu/vscode-file-nesting-config",
    /**
     * The branch name of upstream repo
     */
    "upstreamBranch": "main",
  } satisfies FileNestingUpdater,
}

/**
 * Reactive ConfigObject of `project-config.fileNestingUpdater`
 * @example
 * let configValue = fileNestingUpdaterConfigObject.autoUpdate //get value 
 * fileNestingUpdaterConfigObject.autoUpdate = true // set value
 * fileNestingUpdaterConfigObject.$update("autoUpdate", !configValue, ConfigurationTarget.Workspace, true)
 */
export const fileNestingUpdaterConfigObject = defineConfigObject<FileNestingUpdater>(
  _fileNestingUpdater.scope,
  _fileNestingUpdater.defaults
)
/**
 * Reactive ToConfigRefs of `project-config.fileNestingUpdater`
 * @example
 * let configValue:boolean =fileNestingUpdaterConfigs.autoUpdate.value //get value 
 * fileNestingUpdaterConfigs.autoUpdate.value = true // set value
 * //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
 * fileNestingUpdaterConfigs.autoUpdate.update(true, ConfigurationTarget.WorkspaceFolder, true)
 */
export const fileNestingUpdaterConfigs = defineConfigs<FileNestingUpdater>(
  _fileNestingUpdater.scope,
  _fileNestingUpdater.defaults
)

/**
 * Config keys of `emeraldwalk`
 */
export interface Emeraldwalk {
  /**
   * 
   * @default { "autoClearConsole": false, "shell": undefined, "commands": undefined }
   */
  "runonsave": {
      /**
     * Automatically clear the console on each save before running commands.
     * @default `false`
     */
    'autoClearConsole': boolean
    /**
     * Shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).
     * @default `undefined`
     */
    'shell'?: string
    /**
     * 
     * @default `undefined`
     */
    'commands'?: {
              /**
         * Regex for matching files to run commands on 
         * 
         * NOTE: This is a regex and not a file path spce, so backslashes have to be escaped. They also have to be escaped in json strings, so you may have to double escape them in certain cases such as targetting contents of folders.
         * 
         * e.g.
         * "match": "some\\\\directory\\\\.*"
         * @default `".*"`
         */
        'match': string
        /**
         * Regex for matching files *not* to run commands on.
         * @default `".*"`
         */
        'notMatch': string
        /**
         * Command to execute on save.
         * @default `"echo ${file}"`
         */
        'cmd': string
        /**
         * Run command asynchronously.
         * @default `false`
         */
        'isAsync': boolean 
      }[] 
  },
}

/**
 * Scoped defaults of `emeraldwalk`
 */
const _emeraldwalk = {
  /**
   * scope: `emeraldwalk`
   */
  scope: "emeraldwalk",
  /**
   * Keys' defaults of `emeraldwalk`
   */
  defaults: {
    "runonsave": { "autoClearConsole": false, "shell": undefined, "commands": undefined },
  } satisfies Emeraldwalk,
}

/**
 * Reactive ConfigObject of `emeraldwalk`
 * @example
 * let configValue = emeraldwalkConfigObject.runonsave //get value 
 * emeraldwalkConfigObject.runonsave = true // set value
 * emeraldwalkConfigObject.$update("runonsave", !configValue, ConfigurationTarget.Workspace, true)
 */
export const emeraldwalkConfigObject = defineConfigObject<Emeraldwalk>(
  _emeraldwalk.scope,
  _emeraldwalk.defaults
)
/**
 * Reactive ToConfigRefs of `emeraldwalk`
 * @example
 * let configValue:object =emeraldwalkConfigs.runonsave.value //get value 
 * emeraldwalkConfigs.runonsave.value = { "autoClearConsole": false, "shell": undefined, "commands": undefined } // set value
 * //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
 * emeraldwalkConfigs.runonsave.update(true, ConfigurationTarget.WorkspaceFolder, true)
 */
export const emeraldwalkConfigs = defineConfigs<Emeraldwalk>(
  _emeraldwalk.scope,
  _emeraldwalk.defaults
)
