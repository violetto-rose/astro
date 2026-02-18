import fs from 'node:fs';
import path from 'node:path';

export function resolveWhatsappNumber() {
  let whatsappNumber = process.env.WHATSAPP_NUMBER ?? null;
  let source = whatsappNumber ? 'process.env' : 'not-found';
  if (!whatsappNumber) {
    const visited = new Set<string>();
    const roots: string[] = [];
    let current = process.cwd();
    for (let i = 0; i < 4; i += 1) {
      roots.push(current);
      const parent = path.resolve(current, '..');
      if (parent === current) break;
      current = parent;
    }

    const candidates: string[] = [];
    for (const root of roots) {
      candidates.push(path.resolve(root, '.env'));
      candidates.push(path.resolve(root, 'storefront', '.env'));
    }

    for (const envPath of candidates) {
      if (visited.has(envPath)) continue;
      visited.add(envPath);
      if (!fs.existsSync(envPath)) continue;
      const contents = fs.readFileSync(envPath, 'utf8');
      const match = contents.match(/^\s*WHATSAPP_NUMBER\s*=\s*(.*)\s*$/m);
      if (match?.[1]) {
        whatsappNumber = match[1].trim().replace(/^['"]|['"]$/g, '');
        source = envPath;
        break;
      }
    }
  }
  return {
    number: whatsappNumber?.replace(/\D/g, '') ?? null,
    source,
  };
}
