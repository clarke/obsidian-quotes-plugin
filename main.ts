import { Editor, MarkdownView, Plugin } from 'obsidian';


export default class QuotesPlugin extends Plugin {
	async onload() {
		// This adds an editor command that converts the selected text to a quote.
		this.addCommand({
			id: 'quote-editor-command',
			name: 'Create quote from selection',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				console.log(editor.getSelection());
				const selectedText = editor.getSelection();
				const lines = selectedText.split('\n');

				for(let i = 0;i < lines.length;i++){
					//code here using lines[i] which will give you each line
					lines[i] = '>' + lines[i];
				}

				lines.unshift('>[!QUOTE]');
				editor.replaceSelection(lines.join('\n'));
			}
		});
	}

	onunload() {
	}
}
