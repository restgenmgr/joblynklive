npm run build
xcopy dist\index.html . /Y
xcopy dist\assets\* assets\ /Y /E
git add .
git commit -m "feat: SEO-friendly blog homepage with Tech/Non-Tech filters and links to static posts"
git push origin main