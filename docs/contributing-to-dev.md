[Laravel Lang](https://github.com/Laravel-Lang/lang) / [Main Page](index.md) / Contributing

# Contributing

Contributions are **welcome** and will be fully **credited**.

We accept contributions via Pull Requests on [Github](https://github.com/Laravel-Lang/lang).

## How can I add a language in this project ?

* fork this repository
* create a directory in *src* with the short name of the language (ex: fr for French) from ISO-639-1 (
  see [Wikipedia](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) )
* copy these four files of the English version with your translation : from `script/en` directory
* add a pull request with the name of the language
    * ex: [fr] New language

## How can I fix a file ?

* fork this repository
* update the file
* add a pull request with the name of the language
    * ex: [fr] Update validation for number in validation

## What should I do if there is a tag whose translation is the same as in English?

In some languages ​​there are some strings whose translation is the same as in English. In this case, the script that generates the [status](status.md) adds
them by default to the list of pending translations. This affects the *completion status* for this language which would never be marked in *status list* with (
✔) but with (❗) even if all other strings were translated.

We can avoid this situation in the following way:

* fork this repository if you haven't already
* add a PHP file named with the short name of the language (ex: `es.php` for Spanish) inside the directory `excludes`
* this php file must return an array of strings with each of the tags that we must exclude.
    * for example suppose that the strings `'Email'` and `'API Token'` in `es.json` (ex: for Spanish) do not need translation in this language and therefore
      want to exclude them. The PHP file `es.php` (for example) in `excludes` should have this structure which you can copy for other languages.

```php
<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Exclusion list
    |--------------------------------------------------------------------------
    |
    | This is a list of exclusions for words or phrases where the original
    | form of the word has the same spelling in a given language.
    |
    */

    'API Token',
    'Email',
];
```

* add these changes to the pull request you will send
