import _ from 'lodash';

const diff = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2));
  keys.sort();
  const result = {};
  keys.forEach((key) => {
    if (!_.has(data1, key)) {
      result[key] = { status: '+', value: _.isObject(data2[key]) ? diff(data2[key], data2[key]) : data2[key] };
    } else if (!_.has(data2, key)) {
      result[key] = { status: '-', value: data1[key] };
    } else if (data1[key] === data2[key]) {
      result[key] = { status: ' ', value: data1[key] };
    } else if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      result[key] = { status: ' ', value: diff(data1[key], data2[key]) };
    } else {
      result[key] = { before: null, after: null };
      result[key].before = { status: '-', value: data1[key] };
      result[key].after = { status: '+', value: data2[key] };
    }
  });
  return result;
};

export default diff;
