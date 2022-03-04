import stylish from './stylish';
import plain from './plain';

export default (innerTree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(innerTree);
    case 'plain':
      return plain(innerTree);
    case 'json':
      return JSON.stringify(innerTree);
    default:
      throw new Error(`Format not supported: ${format}`);
  }
};
