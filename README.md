# Vite - Replacing files


## Usage


In your vite.config.js:

```
plugins: [
...

 
    replaceFiles([
      {
        find: '/src/environments/environment.ts',
        replacement: '/src/environments/environment.prod.ts',
      }
    ])
}
```