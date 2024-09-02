// This file is generated by `vscode-ext-gen`. Do not modify manually.
// @see https://github.com/antfu/vscode-ext-gen

// Meta info
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
  | "project-config.remove-watch-dir"
  | "project-config.add-watch-dir"

/**
 * Commands map registed by `cnjimbo.project-config`
 */
export const commands = {
  /**
   * Update config now
   * @value `project-config.manualUpdate`
   */
  manualUpdate: "project-config.manualUpdate",
  /**
   * remove watch dir
   * @value `project-config.remove-watch-dir`
   */
  removeWatchDir: "project-config.remove-watch-dir",
  /**
   * add watch dir
   * @value `project-config.add-watch-dir`
   */
  addWatchDir: "project-config.add-watch-dir",
} satisfies Record<string, CommandKey>

/**
 * Type union of all configs
 */
export type ConfigKey = 
  | "project-config.test.annotations"
  | "project-config.test.color"
  | "project-config.test.partten"
  | "project-config.test.position"
  | "project-config.fileNestingUpdater.autoUpdate"
  | "project-config.fileNestingUpdater.promptOnAutoUpdate"
  | "project-config.fileNestingUpdater.autoUpdateInterval"
  | "project-config.fileNestingUpdater.upstreamRepo"
  | "project-config.fileNestingUpdater.upstreamBranch"

export interface ConfigKeyTypeMap {
  "project-config.test.annotations": boolean,
  "project-config.test.color": string,
  "project-config.test.partten": string[],
  "project-config.test.position": ("after" | "before"),
  "project-config.fileNestingUpdater.autoUpdate": boolean,
  "project-config.fileNestingUpdater.promptOnAutoUpdate": boolean,
  "project-config.fileNestingUpdater.autoUpdateInterval": number,
  "project-config.fileNestingUpdater.upstreamRepo": string,
  "project-config.fileNestingUpdater.upstreamBranch": string,
}

export interface ConfigShorthandMap {
  testAnnotations: "project-config.test.annotations",
  testColor: "project-config.test.color",
  testPartten: "project-config.test.partten",
  testPosition: "project-config.test.position",
  fileNestingUpdaterAutoUpdate: "project-config.fileNestingUpdater.autoUpdate",
  fileNestingUpdaterPromptOnAutoUpdate: "project-config.fileNestingUpdater.promptOnAutoUpdate",
  fileNestingUpdaterAutoUpdateInterval: "project-config.fileNestingUpdater.autoUpdateInterval",
  fileNestingUpdaterUpstreamRepo: "project-config.fileNestingUpdater.upstreamRepo",
  fileNestingUpdaterUpstreamBranch: "project-config.fileNestingUpdater.upstreamBranch",
}

export interface ConfigItem<T extends keyof ConfigKeyTypeMap> {
  key: T,
  default: ConfigKeyTypeMap[T],
}


/**
 * Configs map registed by `cnjimbo.project-config`
 */
export const configs = {
  /**
   * Enabled project-config inline annotations
   * @key `project-config.test.annotations`
   * @default `true`
   * @type `boolean`
   */
  testAnnotations: {
    key: "project-config.test.annotations",
    default: true,
  } as ConfigItem<"project-config.test.annotations">,
  /**
   * Icon color hex for inline displaying
   * @key `project-config.test.color`
   * @default `"auto"`
   * @type `string`
   */
  testColor: {
    key: "project-config.test.color",
    default: "auto",
  } as ConfigItem<"project-config.test.color">,
  /**
   * Icon color hex for inline displaying
   * @key `project-config.test.partten`
   * @default `["src /**\/*","docs /**\/*"]`
   * @type `array`
   */
  testPartten: {
    key: "project-config.test.partten",
    default: ["src /**/*","docs /**/*"],
  } as ConfigItem<"project-config.test.partten">,
  /**
   * Position the icon before or after the icon name
   * @key `project-config.test.position`
   * @default `"before"`
   * @type `string`
   */
  testPosition: {
    key: "project-config.test.position",
    default: "before",
  } as ConfigItem<"project-config.test.position">,
  /**
   * Fetch and update the latest config automatically
   * @key `project-config.fileNestingUpdater.autoUpdate`
   * @default `true`
   * @type `boolean`
   */
  fileNestingUpdaterAutoUpdate: {
    key: "project-config.fileNestingUpdater.autoUpdate",
    default: true,
  } as ConfigItem<"project-config.fileNestingUpdater.autoUpdate">,
  /**
   * Should show up the prompt before doing auto update
   * @key `project-config.fileNestingUpdater.promptOnAutoUpdate`
   * @default `true`
   * @type `boolean`
   */
  fileNestingUpdaterPromptOnAutoUpdate: {
    key: "project-config.fileNestingUpdater.promptOnAutoUpdate",
    default: true,
  } as ConfigItem<"project-config.fileNestingUpdater.promptOnAutoUpdate">,
  /**
   * The minimal interval for auto update, in minutes
   * @key `project-config.fileNestingUpdater.autoUpdateInterval`
   * @default `4320`
   * @type `number`
   */
  fileNestingUpdaterAutoUpdateInterval: {
    key: "project-config.fileNestingUpdater.autoUpdateInterval",
    default: 4320,
  } as ConfigItem<"project-config.fileNestingUpdater.autoUpdateInterval">,
  /**
   * The upstream repo you want to update from
   * @key `project-config.fileNestingUpdater.upstreamRepo`
   * @default `"antfu/vscode-file-nesting-config"`
   * @type `string`
   */
  fileNestingUpdaterUpstreamRepo: {
    key: "project-config.fileNestingUpdater.upstreamRepo",
    default: "antfu/vscode-file-nesting-config",
  } as ConfigItem<"project-config.fileNestingUpdater.upstreamRepo">,
  /**
   * The branch name of upstream repo
   * @key `project-config.fileNestingUpdater.upstreamBranch`
   * @default `"main"`
   * @type `string`
   */
  fileNestingUpdaterUpstreamBranch: {
    key: "project-config.fileNestingUpdater.upstreamBranch",
    default: "main",
  } as ConfigItem<"project-config.fileNestingUpdater.upstreamBranch">,
}

export interface ScopedConfigKeyTypeMap {
  "test.annotations": boolean,
  "test.color": string,
  "test.partten": string[],
  "test.position": ("after" | "before"),
  "fileNestingUpdater.autoUpdate": boolean,
  "fileNestingUpdater.promptOnAutoUpdate": boolean,
  "fileNestingUpdater.autoUpdateInterval": number,
  "fileNestingUpdater.upstreamRepo": string,
  "fileNestingUpdater.upstreamBranch": string,
}

export const scopedConfigs = {
  scope: "project-config",
  defaults: {
    "test.annotations": true,
    "test.color": "auto",
    "test.partten": ["src /**/*","docs /**/*"],
    "test.position": "before",
    "fileNestingUpdater.autoUpdate": true,
    "fileNestingUpdater.promptOnAutoUpdate": true,
    "fileNestingUpdater.autoUpdateInterval": 4320,
    "fileNestingUpdater.upstreamRepo": "antfu/vscode-file-nesting-config",
    "fileNestingUpdater.upstreamBranch": "main",
  } satisfies ScopedConfigKeyTypeMap,
}


/**
 * Types of `project-config` registed by `cnjimbo`
 */
export interface ProjectConfigConfigs {
  /**
   * Enabled project-config inline annotations
   * @key `project-config.test.annotations`
   * @default `true`
   * @type `boolean`
   */
  "test.annotations": boolean,
  /**
   * Icon color hex for inline displaying
   * @key `project-config.test.color`
   * @default `"auto"`
   * @type `string`
   */
  "test.color": string,
  /**
   * Icon color hex for inline displaying
   * @key `project-config.test.partten`
   * @default `["src /**\/*","docs /**\/*"]`
   * @type `array`
   */
  "test.partten": string[],
  /**
   * Position the icon before or after the icon name
   * @key `project-config.test.position`
   * @default `"before"`
   * @type `string`
   */
  "test.position": ("after" | "before"),
  /**
   * Fetch and update the latest config automatically
   * @key `project-config.fileNestingUpdater.autoUpdate`
   * @default `true`
   * @type `boolean`
   */
  "fileNestingUpdater.autoUpdate": boolean,
  /**
   * Should show up the prompt before doing auto update
   * @key `project-config.fileNestingUpdater.promptOnAutoUpdate`
   * @default `true`
   * @type `boolean`
   */
  "fileNestingUpdater.promptOnAutoUpdate": boolean,
  /**
   * The minimal interval for auto update, in minutes
   * @key `project-config.fileNestingUpdater.autoUpdateInterval`
   * @default `4320`
   * @type `number`
   */
  "fileNestingUpdater.autoUpdateInterval": number,
  /**
   * The upstream repo you want to update from
   * @key `project-config.fileNestingUpdater.upstreamRepo`
   * @default `"antfu/vscode-file-nesting-config"`
   * @type `string`
   */
  "fileNestingUpdater.upstreamRepo": string,
  /**
   * The branch name of upstream repo
   * @key `project-config.fileNestingUpdater.upstreamBranch`
   * @default `"main"`
   * @type `string`
   */
  "fileNestingUpdater.upstreamBranch": string,
}

/**
 * defaults/scope of `project-config` registed by `cnjimbo`
 */
export const projectConfigConfigs = {
/**
 * scope: `project-config`
 */
  scope: "project-config",
/**
 * default values under `project-config`
 */
  defaults: {
    "test.annotations": true,
    "test.color": "auto",
    "test.partten": ["src /**/*","docs /**/*"],
    "test.position": "before",
    "fileNestingUpdater.autoUpdate": true,
    "fileNestingUpdater.promptOnAutoUpdate": true,
    "fileNestingUpdater.autoUpdateInterval": 4320,
    "fileNestingUpdater.upstreamRepo": "antfu/vscode-file-nesting-config",
    "fileNestingUpdater.upstreamBranch": "main",
  } satisfies ProjectConfigConfigs,
}


/**
 * Types of `project-config.test` registed by `cnjimbo`
 */
export interface TestConfigs {
  /**
   * Enabled project-config inline annotations
   * @key `project-config.test.annotations`
   * @default `true`
   * @type `boolean`
   */
  "annotations": boolean,
  /**
   * Icon color hex for inline displaying
   * @key `project-config.test.color`
   * @default `"auto"`
   * @type `string`
   */
  "color": string,
  /**
   * Icon color hex for inline displaying
   * @key `project-config.test.partten`
   * @default `["src /**\/*","docs /**\/*"]`
   * @type `array`
   */
  "partten": string[],
  /**
   * Position the icon before or after the icon name
   * @key `project-config.test.position`
   * @default `"before"`
   * @type `string`
   */
  "position": ("after" | "before"),
}

/**
 * defaults/scope of `project-config.test` registed by `cnjimbo`
 */
export const testConfigs = {
/**
 * scope: `project-config.test`
 */
  scope: "project-config.test",
/**
 * default values under `project-config.test`
 */
  defaults: {
    "annotations": true,
    "color": "auto",
    "partten": ["src /**/*","docs /**/*"],
    "position": "before",
  } satisfies TestConfigs,
}


/**
 * Types of `project-config.fileNestingUpdater` registed by `cnjimbo`
 */
export interface FileNestingUpdaterConfigs {
  /**
   * Fetch and update the latest config automatically
   * @key `project-config.fileNestingUpdater.autoUpdate`
   * @default `true`
   * @type `boolean`
   */
  "autoUpdate": boolean,
  /**
   * Should show up the prompt before doing auto update
   * @key `project-config.fileNestingUpdater.promptOnAutoUpdate`
   * @default `true`
   * @type `boolean`
   */
  "promptOnAutoUpdate": boolean,
  /**
   * The minimal interval for auto update, in minutes
   * @key `project-config.fileNestingUpdater.autoUpdateInterval`
   * @default `4320`
   * @type `number`
   */
  "autoUpdateInterval": number,
  /**
   * The upstream repo you want to update from
   * @key `project-config.fileNestingUpdater.upstreamRepo`
   * @default `"antfu/vscode-file-nesting-config"`
   * @type `string`
   */
  "upstreamRepo": string,
  /**
   * The branch name of upstream repo
   * @key `project-config.fileNestingUpdater.upstreamBranch`
   * @default `"main"`
   * @type `string`
   */
  "upstreamBranch": string,
}

/**
 * defaults/scope of `project-config.fileNestingUpdater` registed by `cnjimbo`
 */
export const fileNestingUpdaterConfigs = {
/**
 * scope: `project-config.fileNestingUpdater`
 */
  scope: "project-config.fileNestingUpdater",
/**
 * default values under `project-config.fileNestingUpdater`
 */
  defaults: {
    "autoUpdate": true,
    "promptOnAutoUpdate": true,
    "autoUpdateInterval": 4320,
    "upstreamRepo": "antfu/vscode-file-nesting-config",
    "upstreamBranch": "main",
  } satisfies FileNestingUpdaterConfigs,
}

