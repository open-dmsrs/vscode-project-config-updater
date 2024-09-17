/* eslint-disable */
// This file is generated by `reactive-meta-gen`. Do not modify manually.
// @see https://github.com/calmripple/reactive-meta-gen
// Meta info
import { defineConfigObject, defineConfigs, useCommand as useReactiveCommand, useCommands as useReactiveCommands, useLogger as useReactiveLogger, useOutputChannel as useReactiveOutputChannel, } from 'reactive-vscode';
export const publisher = "cnjimbo";
export const name = "project-kit";
export const version = "1.1.2";
export const displayName = "Project Kit";
export const description = "Export current settings to workspace config file ";
export const extensionId = "cnjimbo.project-kit";
/**
 * Type union of all commands
 */
export type CommandKey = "project-kit.manualUpdate" | "project-kit.change-annnotations" | "project-kit.stop-watch" | "extension.emeraldwalk.enableRunOnSave" | "extension.emeraldwalk.disableRunOnSave";
/**
 * Commands map registed by `cnjimbo.project-kit`
 */
export const commands = {
    /**
     * Update config now
     * @commandkey `project-kit.manualUpdate`
     */
    manualUpdate: "project-kit.manualUpdate",
    /**
     * change annotations
     * @commandkey `project-kit.change-annnotations`
     */
    changeAnnnotations: "project-kit.change-annnotations",
    /**
     * stop watch
     * @commandkey `project-kit.stop-watch`
     */
    stopWatch: "project-kit.stop-watch",
    /**
     * Run On Save: Enable
     * @commandkey `extension.emeraldwalk.enableRunOnSave`
     */
    enableRunOnSave: "extension.emeraldwalk.enableRunOnSave",
    /**
     * Run On Save: Disable
     * @commandkey `extension.emeraldwalk.disableRunOnSave`
     */
    disableRunOnSave: "extension.emeraldwalk.disableRunOnSave",
} satisfies Record<string, CommandKey>;
/**
 * Register a command. See `vscode::commands.registerCommand`.
 */
export const useCommand = (commandFullKey: CommandKey, callback: (...args: any[]) => any): void => useReactiveCommand(commandFullKey, callback);
/**
 * Register multiple commands. See `vscode::commands.registerCommand`.
 */
export const useCommands = (commands: Partial<Record<CommandKey, (...args: any[]) => any>>): void => useReactiveCommands(commands);
/**
 * name type of Logger and OutputChannel
 */
export type LoggerNameType = typeof name | typeof displayName | typeof extensionId;
/**
 * Creates a logger that writes to the output channel.
 */
export const useLogger = (loggerName: LoggerNameType = displayName ?? name ?? extensionId, getPrefix?: ((type: string) => string) | null) => useReactiveLogger(loggerName, { 'getPrefix': getPrefix });
/**
 * @reactive `window.createOutputChannel`
 */
export const useOutputChannel = (outputName: LoggerNameType = displayName ?? name ?? extensionId) => useReactiveOutputChannel(outputName);
/**
 * Update config now
 * @commandkey Register a command `project-kit.manualUpdate`
 */
export const useCommandManualUpdate = (callback: (...args: any[]) => any) => useCommand(commands.manualUpdate, callback);
/**
 * change annotations
 * @commandkey Register a command `project-kit.change-annnotations`
 */
export const useCommandChangeAnnnotations = (callback: (...args: any[]) => any) => useCommand(commands.changeAnnnotations, callback);
/**
 * stop watch
 * @commandkey Register a command `project-kit.stop-watch`
 */
export const useCommandStopWatch = (callback: (...args: any[]) => any) => useCommand(commands.stopWatch, callback);
/**
 * Run On Save: Enable
 * @commandkey Register a command `extension.emeraldwalk.enableRunOnSave`
 */
export const useCommandEnableRunOnSave = (callback: (...args: any[]) => any) => useCommand(commands.enableRunOnSave, callback);
/**
 * Run On Save: Disable
 * @commandkey Register a command `extension.emeraldwalk.disableRunOnSave`
 */
export const useCommandDisableRunOnSave = (callback: (...args: any[]) => any) => useCommand(commands.disableRunOnSave, callback);
/**
 * Section Type of `project-kit`
 */
export interface ProjectKit {
    /**
     * Fetch and update the latest config automatically
     */
    "fileNestingUpdater.autoUpdate": boolean;
    /**
     * The upstream repo you want to update from
     */
    "fileNestingUpdater.upstreamRepo": string;
    /**
     * The branch name of upstream repo
     */
    "fileNestingUpdater.upstreamBranch": string;
    /**
     * Should show up the prompt before doing auto update
     */
    "fileNestingUpdater.promptOnAutoUpdate": boolean;
    /**
     * The minimal interval for auto update, in minutes
     */
    "fileNestingUpdater.autoUpdateInterval": number;
    /**
     * Shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).
     */
    "runonsave.shell"?: (string | undefined);
    "runonsave.commands": ({
        /**
     * Command to execute on save.
     * @default `"echo ${file}"`
     */
        'cmd': string;
        /**
         * Regex for matching files to run commands on
         *
         * NOTE: This is a regex and not a file path spce, so backslashes have to be escaped. They also have to be escaped in json strings, so you may have to double escape them in certain cases such as targetting contents of folders.
         *
         * e.g.
         * "match": "some\\\\directory\\\\.*"
         * @default `".*"`
         */
        'match': string;
        /**
         * Run command asynchronously.
         * @default `false`
         */
        'isAsync': boolean;
        /**
         * Regex for matching files *not* to run commands on.
         * @default `".*"`
         */
        'notMatch': string;
    }[] | undefined);
    /**
     * Automatically clear the console on each save before running commands.
     */
    "runonsave.autoClearConsole": boolean;
}
/**
 * Section Type of `project-kit.fileNestingUpdater`
 */
export interface FileNestingUpdater {
    /**
     * Fetch and update the latest config automatically
     */
    "autoUpdate": boolean;
    /**
     * The upstream repo you want to update from
     */
    "upstreamRepo": string;
    /**
     * The branch name of upstream repo
     */
    "upstreamBranch": string;
    /**
     * Should show up the prompt before doing auto update
     */
    "promptOnAutoUpdate": boolean;
    /**
     * The minimal interval for auto update, in minutes
     */
    "autoUpdateInterval": number;
}
/**
 * Section Type of `project-kit.runonsave`
 */
export interface Runonsave {
    /**
     * Shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).
     */
    "shell"?: (string | undefined);
    "commands": ({
        /**
     * Command to execute on save.
     * @default `"echo ${file}"`
     */
        'cmd': string;
        /**
         * Regex for matching files to run commands on
         *
         * NOTE: This is a regex and not a file path spce, so backslashes have to be escaped. They also have to be escaped in json strings, so you may have to double escape them in certain cases such as targetting contents of folders.
         *
         * e.g.
         * "match": "some\\\\directory\\\\.*"
         * @default `".*"`
         */
        'match': string;
        /**
         * Run command asynchronously.
         * @default `false`
         */
        'isAsync': boolean;
        /**
         * Regex for matching files *not* to run commands on.
         * @default `".*"`
         */
        'notMatch': string;
    }[] | undefined);
    /**
     * Automatically clear the console on each save before running commands.
     */
    "autoClearConsole": boolean;
}
const projectKitDefaults = {
    /**
     * Config defaults of `project-kit`
     */
    "project-kit": {
        /**
         * Fetch and update the latest config automatically
         */
        "fileNestingUpdater.autoUpdate": true,
        /**
         * The upstream repo you want to update from
         */
        "fileNestingUpdater.upstreamRepo": "antfu/vscode-file-nesting-config",
        /**
         * The branch name of upstream repo
         */
        "fileNestingUpdater.upstreamBranch": "main",
        /**
         * Should show up the prompt before doing auto update
         */
        "fileNestingUpdater.promptOnAutoUpdate": true,
        /**
         * The minimal interval for auto update, in minutes
         */
        "fileNestingUpdater.autoUpdateInterval": 4320,
        /**
         * Shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).
         */
        "runonsave.shell": undefined,
        "runonsave.commands": [],
        /**
         * Automatically clear the console on each save before running commands.
         */
        "runonsave.autoClearConsole": false,
    } satisfies ProjectKit as ProjectKit,
    /**
     * Config defaults of `project-kit.fileNestingUpdater`
     */
    "project-kit.fileNestingUpdater": {
        /**
         * Fetch and update the latest config automatically
         */
        "autoUpdate": true,
        /**
         * The upstream repo you want to update from
         */
        "upstreamRepo": "antfu/vscode-file-nesting-config",
        /**
         * The branch name of upstream repo
         */
        "upstreamBranch": "main",
        /**
         * Should show up the prompt before doing auto update
         */
        "promptOnAutoUpdate": true,
        /**
         * The minimal interval for auto update, in minutes
         */
        "autoUpdateInterval": 4320,
    } satisfies FileNestingUpdater as FileNestingUpdater,
    /**
     * Config defaults of `project-kit.runonsave`
     */
    "project-kit.runonsave": {
        /**
         * Shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).
         */
        "shell": undefined,
        "commands": [],
        /**
         * Automatically clear the console on each save before running commands.
         */
        "autoClearConsole": false,
    } satisfies Runonsave as Runonsave,
};
export type ConfigSecionKey = keyof typeof projectKitDefaults;
/**
 * Shorthand of config section name.
 */
export const configs = {
    projectKit: "project-kit",
    fileNestingUpdater: "project-kit.fileNestingUpdater",
    runonsave: "project-kit.runonsave",
} satisfies Record<string, ConfigSecionKey>;
/**
 * Define configurations of an extension. See `vscode::workspace.getConfiguration`.
 */
export const useConfig = <K extends ConfigSecionKey>(section: K) => defineConfigs<typeof projectKitDefaults[K]>(section, projectKitDefaults[section]);
/**
 * Define configurations of an extension. See `vscode::workspace.getConfiguration`.
 */
export const useConfigObject = <K extends ConfigSecionKey>(section: K) => defineConfigObject<typeof projectKitDefaults[K]>(section, projectKitDefaults[section]);
/**
 * ConfigObject of `project-kit`
 * @example
 * const projectKit = useConfigObjectProjectKit()
 * const oldVal:boolean = projectKit.fileNestingUpdater.autoUpdate //get value
 * projectKit.$update("fileNestingUpdater.autoUpdate", oldVal) //update value
 */
export const useConfigObjectProjectKit = () => useConfigObject(configs.projectKit);
/**
 * ToConfigRefs of `project-kit`
 * @example
 * const projectKit = useConfigProjectKit()
 * const oldVal:boolean = projectKit.fileNestingUpdater.autoUpdate.value //get value
 * projectKit.fileNestingUpdater.autoUpdate.update(oldVal) //update value
 */
export const useConfigProjectKit = () => useConfig(configs.projectKit);
/**
 * ConfigObject of `project-kit.fileNestingUpdater`
 * @example
 * const fileNestingUpdater = useConfigObjectFileNestingUpdater()
 * const oldVal:boolean = fileNestingUpdater.autoUpdate //get value
 * fileNestingUpdater.$update("autoUpdate", oldVal) //update value
 */
export const useConfigObjectFileNestingUpdater = () => useConfigObject(configs.fileNestingUpdater);
/**
 * ToConfigRefs of `project-kit.fileNestingUpdater`
 * @example
 * const fileNestingUpdater = useConfigFileNestingUpdater()
 * const oldVal:boolean = fileNestingUpdater.autoUpdate.value //get value
 * fileNestingUpdater.autoUpdate.update(oldVal) //update value
 */
export const useConfigFileNestingUpdater = () => useConfig(configs.fileNestingUpdater);
/**
 * ConfigObject of `project-kit.runonsave`
 * @example
 * const runonsave = useConfigObjectRunonsave()
 * const oldVal:string = runonsave.shell //get value
 * runonsave.$update("shell", oldVal) //update value
 */
export const useConfigObjectRunonsave = () => useConfigObject(configs.runonsave);
/**
 * ToConfigRefs of `project-kit.runonsave`
 * @example
 * const runonsave = useConfigRunonsave()
 * const oldVal:string = runonsave.shell.value //get value
 * runonsave.shell.update(oldVal) //update value
 */
export const useConfigRunonsave = () => useConfig(configs.runonsave);
