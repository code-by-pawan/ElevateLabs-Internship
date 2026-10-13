# Your Name | Frontend Developer Portfolio

A responsive, single-page portfolio built with plain HTML, CSS, and JavaScript. It was created as Task 5 of the ElevateLabs Web Development Internship: deploy a static website with GitHub Pages.

> Before publishing, replace every `Your Name`, `YOUR_EMAIL@example.com`, `YOUR_GITHUB_USERNAME`, and `YOUR_LINKEDIN_USERNAME` placeholder. The three project entries are examples; replace their names, descriptions, and repository links with your own work.

## Features

- Hero, about, skills, projects, contact, and footer sections
- Responsive navigation with an accessible mobile menu
- Smooth anchor navigation and reduced-motion support
- Lightweight reveal-on-scroll effects using the browser's Intersection Observer API
- Responsive project layouts and CSS-built project artwork
- Static files only; no backend, database, build step, or paid service

## Technologies

- HTML5 for semantic page structure
- CSS3 for responsive layout, typography, color, and motion
- Vanilla JavaScript for the mobile menu, current year, and reveal effects
- Git and GitHub for version control and hosting with GitHub Pages

## Project structure

```text
.
├── index.html
├── assets/
│   └── favicon.svg
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

The hero photograph and fonts load from Unsplash and Google Fonts. The favicon and rest of the project are local static files. Replace the image URL in `index.html` if you'd prefer a locally stored hero image.

## Run locally

1. Open this folder in VS Code.
2. Open `index.html` directly in a browser, or use the **Live Server** extension in VS Code and choose **Open with Live Server** for automatic refresh while editing.
3. Resize the browser and try the navigation menu, section links, and project links.

No install or build command is required.

## GitHub Pages deployment

1. On GitHub, create a **public** repository named exactly `YOUR_GITHUB_USERNAME.github.io`, replacing the placeholder with your account username. Leave **Add a README file**, `.gitignore`, and license unchecked so the new repository is empty. This is the user-site naming convention. If that name is already taken on your account, check for an existing repository with that name before changing or deleting anything; an existing user site can be updated in place. For a different repository name, Pages uses a project URL instead.
2. Open PowerShell (VS Code: **Terminal > New Terminal**) and run the following. Replace `YOUR_GITHUB_USERNAME` in both values first. These commands clone the empty public repository and copy the website from this Task 5 workspace into its root:

   ```powershell
   $repoUrl = "https://github.com/YOUR_GITHUB_USERNAME/YOUR_GITHUB_USERNAME.github.io.git"
   $repoPath = "$HOME\Documents\YOUR_GITHUB_USERNAME.github.io"
   git clone $repoUrl $repoPath
   Copy-Item -Path "D:\ElevateLab Internship\Task 5\*" -Destination $repoPath -Recurse -Force
   Set-Location $repoPath
   git status
   git add .
   git commit -m "Build responsive portfolio website"
   git branch -M main
   git push -u origin main
   ```

   If Git reports that your author identity is not configured, set it once (use your name and the email associated with your GitHub account), then retry the commit:

   ```powershell
   git config --global user.name "Your Name"
   git config --global user.email "you@example.com"
   ```

3. Git may open a browser sign-in through Git Credential Manager the first time you push. Complete that sign-in; never put a password or token in a remote URL or commit one to the repository.
4. In the GitHub repository, open **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/(root)`, and save.
5. Wait for the Pages deployment to finish. For a user-site repository, the expected URL is `https://YOUR_GITHUB_USERNAME.github.io/`. Confirm the exact URL and deployment status in **Settings > Pages** and the **Actions** tab.
6. Open the deployed URL and test the page, navigation, image, styling, contact links, and mobile layout. A green successful Pages deployment and a successful live-page check are required before calling it published.

Git may ask you to authenticate the first time. Sign in through the browser prompt / Git Credential Manager, or configure an SSH key with GitHub. Do not put a password or token in a remote URL or commit it to the repository.

### Repository and live URL placeholders

- Repository: `https://github.com/YOUR_GITHUB_USERNAME/YOUR_GITHUB_USERNAME.github.io`
- Live website: `https://YOUR_GITHUB_USERNAME.github.io/`

Replace these placeholders after choosing the GitHub account. A Pages URL is not live until GitHub reports a successful deployment.

## Updating the site

Edit files locally, preview them, and then run these commands in the repository folder:

```powershell
git status
git add .
git commit -m "Describe the update"
git push
```

GitHub Pages automatically publishes changes pushed to `main`. Refresh the live page after the deployment succeeds; browser caching can briefly show an older version.

## Internship acknowledgment

Created for the ElevateLabs Web Development Internship. This project practices semantic HTML, responsive CSS, JavaScript interactions, Git version control, GitHub collaboration, and static website deployment.