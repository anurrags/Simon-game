# Contribution

This is a simple game called simon's game. It is a famous game and you can understand this game by reading this [Simon game](<https://en.wikipedia.org/wiki/Simon_(game)>) or you can watch any youtube videos to understand the rules.

## What you can contribute

- You can contribute to the codes
- You can contribute to contents
- You can also change the content of this files if you like.
- You can also add other files.
- You can change the UI to make it better, but keep the theme same.

## Steps to contribute

1. Fork this repository
2. Create a clone of the forked repository in your local pc

```
git clone "url of the repository"
```

3. Change the directory to the cloned repository

```
cd Simon-game
```

4. Now create a branch

```
git checkout -b branch-name
```

5. Add the changes you want

6. Add the changes to your branch

```
git add .
```

7. Commit these changes

```
git commit -m "Some message"
```

8. Push changes to GitHub

```
git push origin -u branch-name
```

9. Create a pull request

## Add Upstream to forked repository, to keep it synced with main branch

1. Add upstream to your forked repository
```
git remote add upstream https://github.com/anurrags/Simon-game.git
```
2. Sync the changes from upstream repository
```
git fetch upstream
```

3. Merge the changes from the upstream branch to the local branch
```
git merge upstream/main
```
