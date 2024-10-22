import { expect } from 'chai';
import { ClassicEditor, Essentials, Paragraph, Heading } from 'ckeditor5';
import PluginLinkingExample from '../src/pluginlinkingexample.js';

describe( 'PluginLinkingExample', () => {
	it( 'should be named', () => {
		expect( PluginLinkingExample.pluginName ).to.equal( 'PluginLinkingExample' );
	} );

	describe( 'init()', () => {
		let domElement: HTMLElement, editor: ClassicEditor;

		beforeEach( async () => {
			domElement = document.createElement( 'div' );
			document.body.appendChild( domElement );

			editor = await ClassicEditor.create( domElement, {
				plugins: [
					Paragraph,
					Heading,
					Essentials,
					PluginLinkingExample
				],
				toolbar: [
					'pluginLinkingExampleButton'
				]
			} );
		} );

		afterEach( () => {
			domElement.remove();
			return editor.destroy();
		} );

		it( 'should load PluginLinkingExample', () => {
			const myPlugin = editor.plugins.get( 'PluginLinkingExample' );

			expect( myPlugin ).to.be.an.instanceof( PluginLinkingExample );
		} );

		it( 'should add an icon to the toolbar', () => {
			expect( editor.ui.componentFactory.has( 'pluginLinkingExampleButton' ) ).to.equal( true );
		} );

		it( 'should add a text into the editor after clicking the icon', () => {
			const icon = editor.ui.componentFactory.create( 'pluginLinkingExampleButton' );

			expect( editor.getData() ).to.equal( '' );

			icon.fire( 'execute' );

			expect( editor.getData() ).to.equal( '<p>Hello CKEditor 5!</p>' );
		} );
	} );
} );
