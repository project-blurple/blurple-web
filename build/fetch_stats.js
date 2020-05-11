import fs from 'fs';
import path from 'path';

export default async () => {
  // TODO: Replace this with an API call?
  await fs.promises.writeFile(path.join(__dirname, 'data.json'), JSON.stringify({
    members: 51477,
    blurple: 7063,
    servers: 741,
    messages: 375351,
  }));
};
