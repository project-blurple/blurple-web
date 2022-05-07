import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

export default async () => {
  // Fetch the stats
  const resp = await fetch('http://api.projectblurple.com/stats');
  if (!resp.ok) {
    const text = await resp.text().catch(() => '');
    throw new Error(`Failed to fetch stats: ${resp.status} ${resp.statusText} - ${text}`);
  }

  // Parse JSON to check it's valid, and then write it to the file
  const data = await resp.json();
  await fs.promises.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data));
};
