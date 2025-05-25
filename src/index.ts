import { readFile, writeFile, readdir, unlink } from 'fs/promises';
import { join, resolve } from 'path';
import { themes } from './themes.ts';

const themeList = themes;

async function deleteAllFiles(directoryPath = 'themes') {
  try {
    const files = await readdir(resolve(process.cwd(), directoryPath));

    const deletePromises = files.map(async (file) => {
      const filePath = join(directoryPath, file);
      await unlink(filePath);
      console.log(`Deleted file => ${filePath} successfully`);
    });

    await Promise.all(deletePromises);
    console.log('All files have been deleted.');
  } catch (error) {
    console.error('Error deleting files:', error);
  }
}

async function writeThemeFile() {
  const filePromises = themeList.map(async (config) => {
    try {
      const filterConfig = Object.fromEntries(
        Object.entries(config).filter(([_, value]) => value !== null),
      );

      await writeFile(
        `./themes/${config.name}.json`,
        JSON.stringify(
          filterConfig,
          null,
          2,
        ),
        'utf-8',
      );
      console.log(`Create file => './themes/${config.name}.json' successfully`);
    } catch (e) {
      console.error(`Error creating file => './themes/${config.name}.json':`, e);
    }
  });

  await Promise.allSettled(filePromises);
}

async function updatePackageFile() {
  const packageJsonPath = resolve(process.cwd(), 'package.json');

  try {
    const data = await readFile(packageJsonPath, 'utf8');
    const packageJson = JSON.parse(data);

    if (!packageJson.contributes) {
      packageJson.contributes = {};
    }
    if (!Array.isArray(packageJson.contributes.themes)) {
      packageJson.contributes.themes = [];
    }

    packageJson.contributes.themes = themes.map((theme) => {
      return {
        label: theme.label,
        uiTheme: theme.uiTheme,
        path: `./themes/${theme.name}.json`,
      };
    });

    writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
    console.log('Update package.json successfully');
  } catch (err) {
    console.error('Update package.json error:', err);
  }
}

await deleteAllFiles();
await writeThemeFile();
updatePackageFile();
