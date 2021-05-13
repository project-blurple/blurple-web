import fs from 'fs';
import path from 'path';

export default async () => {
  // TODO: Replace this with an API call?
  await fs.promises.writeFile(path.join(__dirname, 'data.json'), JSON.stringify({
    members: 70744, // -serverinfo
    blurple: 9435, // !roles -counts
    servers: 1396, // Search `in:#blurple-servers from: Blurplefied#5422`
    messages: 527190, // Search `after: 2021-05-06 in: general in: bot-playground in: blurplefier-1 in: blurplefier-2 in: blurple-check in: canvas in: paint`
    donators: 43, // !roles -counts
    painters: 656, // !roles -counts
    artists: 868, // !roles -counts
    adventurers: 437, // !roles -counts
  }));
};
