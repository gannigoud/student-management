# Student Management System

A beginner-friendly HTML, CSS and JavaScript project for practising Git and GitHub.

## Features
- Add student records
- Search by name, email or course
- Delete student records
- Save records in browser localStorage
- Responsive layout

## Run locally
1. Download or clone this repository.
2. Open `index.html` in a browser.
3. Add a few sample students.

No package installation or build step is required.

## Git and GitHub practice roadmap

### 1. Configure Git
```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
git config --global --list
```

### 2. Start tracking the project
```bash
git init
git status
git add .
git status
git commit -m "Initial commit: add student management app"
git log --oneline
```

### 3. Connect to GitHub
Create an empty repository on GitHub named `student-management-system`. Do not add a README there because this project already has one.
```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/student-management-system.git
git remote -v
git push -u origin main
```
Replace `YOUR-USERNAME` with your GitHub username.

### 4. Practise a feature branch
```bash
git switch -c feature/student-validation
```
Make a small change to the project, then:
```bash
git status
git diff
git add .
git commit -m "Add student form validation"
git push -u origin feature/student-validation
```
On GitHub, open a Pull Request from `feature/student-validation` into `main`, review it, and merge it.

### 5. Get the merged changes
```bash
git switch main
git pull origin main
git branch -d feature/student-validation
```

### 6. Practise a second branch
```bash
git switch -c feature/course-filter
```
Add a course filter or another feature. Commit and push it:
```bash
git add .
git commit -m "Add course filter"
git push -u origin feature/course-filter
```
Open and merge another Pull Request.

### 7. Practise merge conflicts safely
First make sure your working tree is clean:
```bash
git status
```
Create two branches from `main`, and edit the same line in `README.md` differently on each branch. Commit both changes. Merge one branch into the other. Git may report a conflict.
Open the conflicted file, choose the final text, remove the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`), then:
```bash
git add README.md
git commit -m "Resolve README merge conflict"
```
If you want to cancel a merge before committing:
```bash
git merge --abort
```

### 8. Useful Git commands
```bash
git status
git log --oneline --graph --all
git diff
git diff --staged
git branch
git branch -a
git switch main
git fetch origin
git pull
git remote -v
git show
git restore filename
git restore --staged filename
git stash
git stash pop
```

## Important safety notes
- Run `git status` before committing, merging or deleting branches.
- Do not use `git reset --hard` or `git push --force` while learning; they can discard work or overwrite remote history.
- Never commit passwords, API keys, private files or personal data.
- A commit is saved in your local Git history; `git push` sends commits to GitHub.
