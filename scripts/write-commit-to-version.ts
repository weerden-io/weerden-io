import * as fs from 'fs';
const gitCommitHash = process.env.RENDER_GIT_COMMIT || 'unknown';
const version = `${gitCommitHash.slice(0, 8)}`;

const output = JSON.stringify({ version });
console.log(output);
fs.writeFileSync(`${__dirname}/../frontend/src/version.json`, output);
