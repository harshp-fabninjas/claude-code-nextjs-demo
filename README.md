This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Using Claude Code on This Project

Step-by-step setup for the team.

### 1. Initialize the project

Run `/init`. Claude scans the codebase and generates `CLAUDE.md`, a file it reads at the start of every session so it already knows the project's structure and conventions.

- **Try it:** run `/init` in your own clone and see what it picks up about the project.

### 2. Add preferences to CLAUDE.md

`CLAUDE.md` acts as Claude's persistent memory for this repo — anything written here is followed in every future session. Append rules any time, e.g.:

```
# Please add the one line simple on-point comment whenever you implement the function
```

- **Try it:** add your own rule to `CLAUDE.md`, start a new Claude session, and see it get followed.

### 3. Use Plan Mode with detailed prompts

Plan mode makes Claude research the code and write a plan before changing anything, so you can review the approach before it starts. The more detail in your prompt, the better the plan. Example:

```
Please change the home page design and make it as described below.
Create the simple hero section with navbar that simply represents that
this app is the demo for Claude Code and its features like MCP
integration, hooks, etc.
```

- **Try it:** enter plan mode with any change you have in mind, written in your own words, and review the plan before letting Claude execute it.

### 4. Add the Playwright MCP (browser access)

MCP (Model Context Protocol) connects Claude to outside tools. This one gives Claude a real browser, so it can open the app, click around, and check its own UI changes instead of you pasting screenshots.

```bash
# registers the Playwright MCP server with Claude Code
claude mcp add playwright npx @playwright/mcp@latest
```

- **Try it:** make any UI change and ask Claude to check it in the browser itself, no screenshot needed.

### 5. Create a custom slash command

Turns a repeated instruction into a reusable `/implement-feature <description>` command — anyone on the team can run it and Claude follows the same steps every time.

1. Inside `.claude/`, create a `commands` folder.
2. Inside `commands`, create `implement-feature.md`:

```
You will be implementing a new feature in this codebase

# $ARGUMENTS is replaced with whatever text you type after the command name
$ARGUMENTS

IMPORTANT: Only do this for front-end features.
Once this feature is built, make sure to write the changes you made to file called frontend-changes.md
Do not ask for permissions to modify this file, assume you can always do it.
```

Usage — type the feature description right after the command:

```
/implement-feature add a dark mode toggle to the navbar
```

- **Try it:** run `/implement-feature` with any small front-end task of your own and watch `frontend-changes.md` get updated automatically.

### 6. Run multiple Claude Code sessions (git worktrees)

A worktree is a separate folder checked out to its own branch. This lets you run several Claude sessions in parallel, each working on a different feature, without their changes colliding.

```bash
# folder to hold all worktrees
mkdir .trees
# creates a new branch + folder for feature 1
git worktree add .trees/ui_feature_1
# creates a new branch + folder for feature 2
git worktree add .trees/ui_feature_2
```

Work on each feature in its own session, then use your main Claude terminal to merge the worktree changes into `main`.

- **Try it:** create a worktree for a feature of your own, open a new terminal in it, and run Claude there alongside your main session.

### 7. Install the Figma MCP (mockup to code)

Connects Claude directly to Figma. Share a mockup link and Claude reads the design and generates matching code, no manual measuring or screenshotting needed.

```bash
# installs the official Figma plugin for Claude Code
claude plugin install figma@claude-plugins-official
```

Example: the `/figma` page in this repo was built by giving Claude this mockup link:
[Figma mockup](https://www.figma.com/design/Ld3bFjtCNYEBPCBunJ4rqM/Figma-mockup?node-id=0-1&p=f&t=aMJdShFp1QBLySC7-0)

- **Try it:** paste any Figma mockup link of your own and ask Claude to build the page from it.

### 8. Connect GitHub (Claude git hook)

Sets up GitHub Actions so Claude can review pull requests and respond to `@claude` mentions directly on GitHub, not just in your terminal.

1. Install the GitHub CLI and authenticate:

```bash
# make sure github cli up and running in your local machine

# installs the GitHub CLI
brew install gh
# logs the CLI into your GitHub account
gh auth login
```

2. Run `/install-github-app` into claude and follow the process it suggests.
3. Check the PR Claude raises — merging it sets up the claude GitHub integration for your repo.

Example: [PR #2](https://github.com/harshp-fabninjas/claude-code-nextjs-demo/pull/2) — a `@claude` mention got Claude to fix an unclosed `<p>` tag and push the commit directly to the PR.

- **Try it:** open any PR and comment `@claude` asking it to fix or review something of your choice — watch it push a commit back.


**This is the example from the course [Claude Code: A Highly Agentic Coding Assistant] learnings, in case of any query please reach out to Harsh (harshp@fabninjas.com)**