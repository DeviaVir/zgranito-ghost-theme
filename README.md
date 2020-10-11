# zgranito-ghost-theme

## Prepare theme package

```
zip -r ~/zgranito.zip ~/Sites/zgranito-ghost-theme -x "*.git*" -x "*node_modules*" -x "*bower_components*"
```

## Update theme

```
cd assets
npm i
```

Update SCSS/JS/etc

```
grunt build
```
