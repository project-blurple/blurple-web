import fs from 'fs';
import path from 'path';

export default async () => {
  // TODO: Replace this with an API call?
  await fs.promises.writeFile(path.join(__dirname, 'data.json'), JSON.stringify({
    members: 55310,
    blurple: 8196,
    servers: 809,
    messages: 478093,
  }));
};
