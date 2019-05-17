const R = require('ramda');

const getFirstItem = R.pipe(
  R.pathOr(null, ['store']),
  R.defaultTo('fiction'),
  R.head,
  R.propOr('fiction', 'category'),
);

const data = {
  "store" : [
    {
      "category": "myCategory"
    }
  ]
};

console.log(getFirstItem(data));
// console.log(R.prop('category', R.head(R.path(['store'], data))));