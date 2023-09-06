word2vec
=================

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g word2vec
$ word2vec COMMAND
running command...
$ word2vec (--version)
word2vec/0.0.0 linux-x64 node-v16.13.0
$ word2vec --help [COMMAND]
USAGE
  $ word2vec COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
- [word2vec](#word2vec)
- [Usage](#usage)
- [Commands](#commands)
  - [`word2vec analogy [WORD1] [WORD2] [WORD3]`](#word2vec-analogy-word1-word2-word3)
  - [`word2vec help [COMMANDS]`](#word2vec-help-commands)
  - [`word2vec math OPERATION`](#word2vec-math-operation)
  - [`word2vec plugins`](#word2vec-plugins)
  - [`word2vec plugins:install PLUGIN...`](#word2vec-pluginsinstall-plugin)
  - [`word2vec plugins:inspect PLUGIN...`](#word2vec-pluginsinspect-plugin)
  - [`word2vec plugins:install PLUGIN...`](#word2vec-pluginsinstall-plugin-1)
  - [`word2vec plugins:link PLUGIN`](#word2vec-pluginslink-plugin)
  - [`word2vec plugins:uninstall PLUGIN...`](#word2vec-pluginsuninstall-plugin)
  - [`word2vec plugins:uninstall PLUGIN...`](#word2vec-pluginsuninstall-plugin-1)
  - [`word2vec plugins:uninstall PLUGIN...`](#word2vec-pluginsuninstall-plugin-2)
  - [`word2vec plugins update`](#word2vec-plugins-update)
  - [`word2vec similar WORD`](#word2vec-similar-word)
  - [`word2vec train`](#word2vec-train)

## `word2vec analogy [WORD1] [WORD2] [WORD3]`

For a pair of words in a relationship, this command tries to find the term which stands in an analogous relationship to the supplied word.

```
USAGE
  $ word2vec analogy [WORD1] [WORD2] [WORD3] [-s <value>]

ARGUMENTS
  WORD1  word1 is to RESULT as word2 is to word3
  WORD2  word1 is to RESULT as word2 is to word3
  WORD3  word1 is to RESULT as word2 is to word3

FLAGS
  -s, --size=<value>  [default: 10] size of returned list

DESCRIPTION
  For a pair of words in a relationship, this command tries to find the term which stands in an analogous relationship
  to the supplied word.

EXAMPLES
  $ word2vec analogy woman man king -s 20
```

_See code: [dist/commands/analogy.ts](https://github.com/asmith60/word2vec/blob/v0.0.0/dist/commands/analogy.ts)_

## `word2vec help [COMMANDS]`

Display help for word2vec.

```
USAGE
  $ word2vec help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for word2vec.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.17/src/commands/help.ts)_

## `word2vec math OPERATION`

Perform mathematical operations on words

```
USAGE
  $ word2vec math OPERATION [-s <value>]

ARGUMENTS
  OPERATION  Mathematical operation you want to perform

FLAGS
  -s, --size=<value>  [default: 10] size of returned list

DESCRIPTION
  Perform mathematical operations on words

EXAMPLES
  $ word2vec math arya-sister+brother
```

_See code: [dist/commands/math.ts](https://github.com/asmith60/word2vec/blob/v0.0.0/dist/commands/math.ts)_

## `word2vec plugins`

List installed plugins.

```
USAGE
  $ word2vec plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ word2vec plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.6/src/commands/plugins/index.ts)_

## `word2vec plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ word2vec plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ word2vec plugins add

EXAMPLES
  $ word2vec plugins:install myplugin 

  $ word2vec plugins:install https://github.com/someuser/someplugin

  $ word2vec plugins:install someuser/someplugin
```

## `word2vec plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ word2vec plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ word2vec plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.6/src/commands/plugins/inspect.ts)_

## `word2vec plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ word2vec plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ word2vec plugins add

EXAMPLES
  $ word2vec plugins:install myplugin 

  $ word2vec plugins:install https://github.com/someuser/someplugin

  $ word2vec plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.6/src/commands/plugins/install.ts)_

## `word2vec plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ word2vec plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ word2vec plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.6/src/commands/plugins/link.ts)_

## `word2vec plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ word2vec plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ word2vec plugins unlink
  $ word2vec plugins remove
```

## `word2vec plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ word2vec plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ word2vec plugins unlink
  $ word2vec plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.6/src/commands/plugins/uninstall.ts)_

## `word2vec plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ word2vec plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ word2vec plugins unlink
  $ word2vec plugins remove
```

## `word2vec plugins update`

Update installed plugins.

```
USAGE
  $ word2vec plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.6/src/commands/plugins/update.ts)_

## `word2vec similar WORD`

Finds the most similar words to the supplied word

```
USAGE
  $ word2vec similar WORD [-s <value>]

ARGUMENTS
  WORD  word used to generate similars

FLAGS
  -s, --size=<value>  [default: 10] size of returned list

DESCRIPTION
  Finds the most similar words to the supplied word

EXAMPLES
  $ word2vec similar stark -s 20
```

_See code: [dist/commands/similar.ts](https://github.com/asmith60/word2vec/blob/v0.0.0/dist/commands/similar.ts)_

## `word2vec train`

Train a model with supplied text file

```
USAGE
  $ word2vec train -f <value>

FLAGS
  -f, --file=<value>  (required) file containing text used for training

DESCRIPTION
  Train a model with supplied text file

EXAMPLES
  $ word2vec train train -f /path/to/file.txt
```

_See code: [dist/commands/train.ts](https://github.com/asmith60/word2vec/blob/v0.0.0/dist/commands/train.ts)_
<!-- commandsstop -->
