# Make your first github contribution!

This is a simple project to help you get started with open source contribution. This project is a guest book where you can add your name and country to the guest book.

You will learn how to fork a repository, clone a repository, create a branch, commit your changes, push your changes to your forked repository and create a pull request.

By signing our guest book, you are taking the first step towards becoming a valuable contributor to the open source community.

# Earn a Github achievement

Earn a Github achievement badge by making your first contribution to an open source project.

<p></p>
<img src="public/pull-shark.png" alt="pull-shark-badge" width="75"/>

# How to contribute

### Step 1: Fork this repository

- To fork a repository, click on the Fork button on the top right corner of the repository page. This will create a copy of the repository in your Github account.

### Step 2: Clone the repository

- To clone a repository, click on the green Code button on the top right corner of the forked repository page. Copy the HTTPS URL provided and run the following command in your terminal:

  ```js
  git clone <url>
  ```

### Step 3: Create a branch

- To create a new branch, run the following command in your terminal:

  ```js
  git checkout -b <branch-name>
  ```

### Step 4: Add your entry to the guest book

- To create a entry you need to add an object to the `guestEntries` array in the `guest-book.ts` file. The object should have the following properties: `name`, `country`.

### Step 5: Commit your changes

- To commit your changes, run the following commands in your terminal:
  ```js
      git add .
      git commit -m "Guest Book Entry"
  ```

### Step 6: Push your changes to your forked repository

- To push your changes, run the following command in your terminal:
  ```js
  git push origin <branch-name>
  ```

### Step 7: Create a pull request

- To create a pull request, click on the green Create Pull Request button on the top right corner of the forked repository page. Add a title and description to your pull request.

### Step 8: Wait for your pull request to be merged

- Once your pull request is merged, you will receive a notification email. You can then pull the changes from the upstream repository to your local repository to keep it up-to-date.
