var requireDir = require('require-dir');

// Require all tasks in build/tasks, including subfolders
requireDir('./tasks', { recurse: true });