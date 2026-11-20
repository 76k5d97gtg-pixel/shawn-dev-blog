---
author: Shawn
pubDatetime: 2026-11-20T00:00:00.000Z
title: "Git Merge vs. Cherry-Pick: Copy One Commit to Another Branch"
slug: git-cherry-pick-single-commit
featured: true
draft: false
tags:
  - git
  - troubleshooting
description: "Learn when to use Git cherry-pick instead of merge to copy a single commit to another branch, and how to handle conflicts."
---

You fixed a bug on `main`, but your release branch needs the same fix.
How do you bring over that commit without including unrelated changes?

For a single, ordinary commit, use `git cherry-pick`.

## Merge vs. cherry-pick

| Goal | Command |
| --- | --- |
| Integrate another branch's history | `git merge` |
| Apply the changes from one selected commit | `git cherry-pick` |

Merging a commit by its SHA still integrates its history. It does not
restrict the operation to that commit's individual changes.

## Copy one commit

This example assumes `release-fix` already exists locally.
Replace `abc1234` with your actual commit SHA.

First, check your working directory:

```bash
git status
```

Commit or stash unfinished work before continuing.

Fetch the latest remote commits and inspect the fix:

```bash
git fetch origin
git show abc1234
```

Switch to the branch that needs the fix:

```bash
git switch release-fix
git cherry-pick abc1234
```

Cherry-pick normally creates a new commit on the current branch.
The original commit remains on its source branch.

## Resolve conflicts

If Git reports conflicts, inspect them:

```bash
git status
```

Edit each conflicted file, resolve the differences, and remove any
conflict markers. Stage the resolved files individually, then continue:

```bash
git add path/to/resolved-file
git cherry-pick --continue
```

To cancel the operation instead:

```bash
git cherry-pick --abort
```

## Review before pushing

Inspect the resulting commit, then run the project's relevant build
and tests:

```bash
git show HEAD
```

A commit may depend on earlier changes. A successful cherry-pick
does not guarantee that the application works.

When the result is ready, push your branch and follow your team's
review process:

```bash
git push -u origin release-fix
```

## References

- [Official Git cherry-pick documentation](https://git-scm.com/docs/git-cherry-pick)
- [Official Git merge documentation](https://git-scm.com/docs/git-merge)
