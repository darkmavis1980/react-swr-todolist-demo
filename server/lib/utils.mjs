export const validateList = list => {
  if (!Array.isArray(list)) {
   return [];
  }
  return list;
}

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));