import type { PluginLinkingExample } from './index.js';

declare module '@ckeditor/ckeditor5-core' {
	interface PluginsMap {
		[ PluginLinkingExample.pluginName ]: PluginLinkingExample;
	}
}
