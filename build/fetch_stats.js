import fs from 'fs';
import path from 'path';

export default async () => {
  // TODO: Replace this with an API call?
  await fs.promises.writeFile(path.join(__dirname, 'data.json'), JSON.stringify({
    members: 40571, // -serverinfo
    blurple: 2062, // !roles -counts
    servers: 370, // Search `in:#blurple-servers from: Blurplefied#5422`
    messages: 86837, // Search `after: 2021-05-06 in: general in: bot-playground in: blurplefier-1 in: blurplefier-2 in: blurple-check in: canvas in: paint`
    donators: 16, // !roles -counts
    painters: 108, // !roles -counts
    artists: 325, // !roles -counts
  }));
};
