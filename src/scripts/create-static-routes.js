import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  "about",
  "support",
  "privacy",
  "terms",
  "lunomi",
  "lunomi/support",
  "lunomi/privacy"
];

const distDir = path.join(__dirname, "..", "dist");
const sourceIndex = path.join(distDir, "index.html");

if (!fs.existsSync(sourceIndex)) {
  console.error("dist/index.html not found. Run the Vite build first.");
  process.exit(1);
}

for (const route of routes) {
  const routeDir = path.join(distDir, route);

  fs.mkdirSync(routeDir, { recursive: true });

  fs.copyFileSync(
    sourceIndex,
    path.join(routeDir, "index.html")
  );

  console.log(`Created static route: /${route}`);
}
