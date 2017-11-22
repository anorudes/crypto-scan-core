// @flow

export const removeHtmlTags = (text: string = ''): string => {
  // Remove all html tags

  return text.replace(/<\/?[^>]+(>|$)/g, '');
};
