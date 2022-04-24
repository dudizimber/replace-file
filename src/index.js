
/**
 * @function replaceFiles
 * @param {({find: string, replacement: string})[]} replacements
 * @return {({name: "rollup-plugin-replace-files", enforce: "pre", Promise<resolveId>})}
 */
function replaceFiles(replacements) {
  if (!replacements?.length) {
    return null;
  }

  return {
    name: 'rollup-plugin-replace-files',
    enforce: 'pre',
    apply(config, { command }) {
      return command === 'build';
    },
    async resolveId(source, importer) {
      const resolved = await this.resolve(source, importer, { skipSelf: true })
      const foundReplace = replacements.find((replacement) => resolved?.id.endsWith(replacement.find));

      if (!foundReplace) {
        return null;
      }
      console.info(`replace "${foundReplace.find}" with "${foundReplace.replacement}"`);

      try {
        // return new file content
        return {
          id: resolved.id.replace(foundReplace.find, '') + '/' + foundReplace.replacement,
        };
      } catch (err) {
        console.error(err);

        return null;
      }


    },
  }
}

module.exports = replaceFiles;