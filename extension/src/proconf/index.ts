import {
  extensionContext as ctxRef,
  defineExtension,
  useCommand,
} from 'reactive-vscode'
import { commands, projectConfigConfigObject as config } from '@/generated-meta'
import { fetchAndUpdate } from './fetch'

const { activate, deactivate } = defineExtension(() => {
  const ctx = ctxRef.value
  if (ctx) {
    useCommand(commands.manualUpdate, (..._args) => {
      fetchAndUpdate(ctx, false)
    })

    const initialized = ctx.globalState.get('init', false)
    if (!initialized) {
      ctx.globalState.update('init', true)
      fetchAndUpdate(ctx, false)
    }

    const lastUpdate = ctx.globalState.get('lastUpdate', 0)
    if (config['fileNestingUpdater.autoUpdateInterval']) {
      if (Date.now() - lastUpdate >= config['fileNestingUpdater.autoUpdateInterval'] * 60_000)
        fetchAndUpdate(ctx, config['fileNestingUpdater.promptOnAutoUpdate'])
    }
  }
})

export { activate, deactivate }
