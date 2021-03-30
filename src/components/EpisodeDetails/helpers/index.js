const removeAnyHTMLTagsFromString = (incomingStr) =>
  incomingStr.replace(/(<([^>]+)>)/gi, '');

export default removeAnyHTMLTagsFromString;
