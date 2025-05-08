import { exec } from 'child_process';

/**
 * -# progress
 * -O default file name
 * -o customize file name
 * -x [proxy] use proxy
 * -v log debug info
 */
const curlCommand =
  'curl -# -O -x 127.0.0.1:7897 https://raw.githubusercontent.com/microsoft/vscode-docs/main/api/references/theme-color.md';

exec(curlCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Command execution error: ${stderr}`);
    return;
  }
  if (stdout) {
    console.log('File has been downloaded');
    console.log(stdout);
  }
});
