import fs from 'fs';
import path from 'path';

export default async () => {
  // TODO: Replace this with an API call?
  await fs.promises.writeFile(path.join(__dirname, 'data.json'), JSON.stringify({
    members: 52332, // -serverinfo
    blurple: 5158, // !roles -counts
    servers: 883, // Search `in:#blurple-servers from: Blurplefied#5422`
    messages: 233922, // Search `after: 2021-05-06 in: general in: bot-playground in: blurplefier-1 in: blurplefier-2 in: blurple-check in: canvas in: paint`
    donators: 25, // !roles -counts
    painters: 318, // !roles -counts
    artists: 483, // !roles -counts
    adventurers: 225, // !roles -counts
  }));
};
