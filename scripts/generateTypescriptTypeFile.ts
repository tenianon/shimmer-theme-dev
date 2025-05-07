import fs from 'node:fs'

const markdownFilePathName = './theme-color.md'
const typeFilePathName = './src/typings/workbench.d.ts'

function matchEditorTokenColorCustomizations(filePath: string = markdownFilePathName) {
  
	const themeColorMarkdownFile = fs.readFileSync(filePath, 'utf8')
  
	/**
   * Match markdown {- xxxx:} 
   */
	const regex = /- (.+?):\s*(.*)/g

	let match: RegExpExecArray | null

	const extractedValues: Array<string> = []

	while ((match = regex.exec(themeColorMarkdownFile.replace(/`/g, ''))) !== null) {
		extractedValues.push(match[1].trim())
	}

	return extractedValues
}

function generateTypeScriptTypeFile(extractedValues: Array<string>) {

	let interfaceContent = 'declare type WorkbenchColorCustomizations = Partial<{\r\n  [key in WorkbenchColorCustomizationsTypesLegend]: string | null\r\n}>\r\n\r\n'

	interfaceContent += 'declare type WorkbenchColorCustomizationsTypesLegend = \r\n'

	for (const key of extractedValues) {
		interfaceContent += `	'${key}' |\r\n`
	}

	interfaceContent = interfaceContent.slice(0, interfaceContent.length - 3) + '\r\n'

	return interfaceContent
}

function writeTypeScriptTypeFile(content: string) {
	fs.writeFile(typeFilePathName, content, { encoding: 'binary' }, err => {
		if (err) {
			console.error('Error writing file', err)
			return
		}
		console.log('TypeScript file created successfully')
	})
}

writeTypeScriptTypeFile(generateTypeScriptTypeFile(matchEditorTokenColorCustomizations()))