@echo off
echo Building site...
call npm run docs:build

echo Deploying to GitHub Pages...
cd docs\.vuepress\dist
git init
git add -A
git commit -m "Deploy updates"
git branch -M gh-pages
git push -f https://github.com/majdsameraskar/majdsameraskar.github.io.git gh-pages
cd ..\..\..

echo Done! Your site is updated at https://majdsameraskar.github.io