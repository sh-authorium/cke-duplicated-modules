import { expect } from 'chai';
import { PluginLinkingExample as PluginLinkingExampleDll, icons } from '../src/index.js';
import PluginLinkingExample from '../src/pluginlinkingexample.js';

import ckeditor from './../theme/icons/ckeditor.svg';

describe( 'CKEditor5 PluginLinkingExample DLL', () => {
	it( 'exports PluginLinkingExample', () => {
		expect( PluginLinkingExampleDll ).to.equal( PluginLinkingExample );
	} );

	describe( 'icons', () => {
		it( 'exports the "ckeditor" icon', () => {
			expect( icons.ckeditor ).to.equal( ckeditor );
		} );
	} );
} );
