import fs from 'fs';
import { globby } from 'globby';
import path from 'path';
import { fileURLToPath } from 'url';

const projectRootPath = path.resolve(fileURLToPath(import.meta.url), '../../');

const outDir = path.join(projectRootPath, 'public-repo');

const outFileList = await globby([
  '.vscode',
  'themes',
  '.gitignore',
  '.vscodeignore',
  'CHANGELOG.md',
  'icon.png',
  'LICENSE',
  'package.json',
  'README_zh-cn.md',
  'README.md',
  'shimmer-theme*.png',
]);

const pngList = await globby(['shimmer-theme*.png']);

function changeBuildPackage() {
  const packagePath = path.join(outDir, 'package.json');

  const packageFile = fs.readFileSync(packagePath, 'utf8');

  const publicPackage = JSON.parse(packageFile);

  delete publicPackage.type;
  delete publicPackage.scripts;
  delete publicPackage.devDependencies;

  fs.writeFileSync(packagePath, JSON.stringify(publicPackage, null, 2));
}

function changeBuildGitignore() {
  const gitignorePath = path.join(outDir, '.gitignore');

  const gitignore = `
.DS_Store

*.vsix`;

  fs.writeFileSync(gitignorePath, gitignore);
}

function changeBuildVscodeIgnore() {
  const vscodeignorePath = path.join(outDir, '.vscodeignore');

  const vscodeignore = `
.vscode/**
.vscode-test/**

README_zh-cn.md

${pngList.join('\n')}`;

  fs.writeFileSync(vscodeignorePath, vscodeignore);
}

function generatePublicBuild() {
  if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true });
  }

  fs.mkdirSync(outDir, { recursive: true });

  for (const outFile of outFileList) {
    const targetPath = path.join(projectRootPath, outFile);
    const outPath = path.join(outDir, outFile);
    const destDir = path.dirname(outPath);

    if (!fs.existsSync(targetPath)) {
      console.warn(`file not exists: ${targetPath}`);
      continue;
    }

    fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(targetPath, outPath);
  }
}

generatePublicBuild();
changeBuildGitignore();
changeBuildVscodeIgnore();
changeBuildPackage();
