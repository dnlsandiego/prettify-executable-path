# Prettify your executable path a.k.a $PATH

## Install

```
// Yarn
yarn global add prettify-executable-path

// NPM
npm install -g prettify-executable-path
```

## Usage
Once installed globally via `npm` or `yarn`, you should now have access to a `prettify-path` command anywhere in your command line session.
Try it out!
```
$ prettify-path
```

Which outputs something along the lines of:

```
- /Users/$username/.rvm/gems/ruby-2.2.4/bin
- /Users/$username/.rvm/gems/ruby-2.2.4@global/bin
- /Users/$username/.rvm/rubies/ruby-2.2.4/bin
- /usr/local/Cellar/node/7.9.0/bin
- /Users/$username/bin
- /usr/local/bin
- /usr/bin
- /bin
- /usr/sbin
- /sbin
- /Users/$username/.rvm/bin
```
