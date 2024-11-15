import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

export default (diff, style = 'stylish') => {
  if (style === 'stylish') {
    return stylish(diff);
  }
  if (style === 'plain') {
    return plain(diff);
  }
  if (style === 'json') {
    return json(diff);
  }
  return `${JSON.stringify(diff, null, 2)}`;
};
