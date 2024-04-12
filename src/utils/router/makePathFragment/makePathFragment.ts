/*
###############################################################
#                                                             #
# This function converts any string to valid path frament     #
# camelCase will be replaced as camel-case                    #
# Strings started with underdash (_) will be parsed as params #
# _param -> :param                                            #
#                                                             #
###############################################################
*/

export const makePathFragment = (frag: string) => {
  if (frag.startsWith('_')) return frag.replace('_', ':');

  return frag
    .replace(/^\$/, '')
    .replace(/[A-Z0-9]/g, (match, i) => `${i ? '-' : ''}${match.toLowerCase()}`);
};
