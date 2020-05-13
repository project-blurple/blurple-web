import fs from 'fs';
import path from 'path';

export default async () => {
  // TODO: Replace this with an API call?
  await fs.promises.writeFile(path.join(__dirname, 'data.json'), JSON.stringify({
    members: 56894,
    blurple: 8659,
    servers: 824,
    messages: 530949,
  }));
};
