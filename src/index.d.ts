/**
 * Usage example:
 * 
 * In your vite.config.js:
 * 
 * plugins: [
 * 
 * ...
 * 
 * ```
 * 
    replaceFiles([
      {
        find: '/src/environments/environment.ts',
        replacement: '/src/environments/environment.prod.ts',
      }
    ])
}
```
 * 
 */
declare function replaceFiles(
    replacements: ({ find: string, replacement: string })[]
): { name: "rollup-plugin-replace-files", enforce: "pre", resolveId: Promise<{id: string}> };

export { replaceFiles as default };