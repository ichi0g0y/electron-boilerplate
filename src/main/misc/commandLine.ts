let sourceFromCmmandLine: string | undefined = undefined;

/*-----------------------------------------------------------------------------*/
export const getSourceFromCommandLine = () => sourceFromCmmandLine;
export const clearSourceFromCommandLine = () => {
  sourceFromCmmandLine = undefined;
};

/*-----------------------------------------------------------------------------*/
export const parseCommandLine = (argv: string[]) => {
  sourceFromCmmandLine = undefined;
  for (let i = 0; i < Math.min(20, argv.length); i++) {
    if (argv[i] === undefined) continue;
    if (argv[i].indexOf('--something-option-name=') != -1) {
      sourceFromCmmandLine = argv[i]
        .replace('--something-option-name=', '')
        .replace(/\r\n/g, '\n')
        .replace(/\r/g, '\n');
    }
  }
};
