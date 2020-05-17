import fs from 'fs';
import path from 'path';

export default async () => {
  // TODO: Replace this with an API call?
  await fs.promises.writeFile(path.join(__dirname, 'data.json'), JSON.stringify({
    members: 59611,
    blurple: 9358,
    servers: 897,
    messages: 870895,
    donators: 48,
    painters: 552,
    artists: 761,
  }));
};
