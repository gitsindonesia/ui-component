git add .
git commit -am "Version $1"
git tag -a "$1" -m "Version $1"
git push --tags
git push
npm publish
