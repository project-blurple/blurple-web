import fs from 'fs';
import path from 'path';

export default async () => {
  // TODO: Replace this with an API call?
  await fs.promises.writeFile(path.join(__dirname, 'data.json'), JSON.stringify({
    members: 71345, // -serverinfo
    blurple: 9532, // !roles -counts
    servers: 1496, // Search `in:#blurple-servers from: Blurplefied#5422`
    messages: 575091, // Search `after: 2021-05-06 in: general in: bot-playground in: blurplefier-1 in: blurplefier-2 in: blurple-check in: canvas in: paint`
    donators: 52, // !roles -counts
    painters: 707, // !roles -counts
    artists: 896, // !roles -counts
    adventurers: 453, // !roles -counts
  }));
};
