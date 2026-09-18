#!/usr/bin/env bash
# Publish the current build to GitHub Pages (https://notqai.github.io/milus-cookies/).
# Usage: ./deploy.sh          (needs push access to the repo)
set -euo pipefail
cd "$(dirname "$0")"
REPO="https://github.com/notqai/milus-cookies.git"
BASE="/milus-cookies/"   # change to "/" if a custom domain is attached

echo "→ Building with base $BASE…"
npm run images >/dev/null
npx vite build --base="$BASE"
cp dist/index.html dist/404.html   # SPA fallback for deep links on Pages
touch dist/.nojekyll

echo "→ Publishing dist/ to gh-pages…"
cd dist
git init -q -b gh-pages
git add -A
git -c user.name="notqai" -c user.email="qaisersiew123@gmail.com" commit -qm "Deploy $(date '+%Y-%m-%d %H:%M')"
git push -f "$REPO" gh-pages
cd ..
rm -rf dist/.git
echo "✓ Deployed. Live in ~1 min at https://notqai.github.io/milus-cookies/"
