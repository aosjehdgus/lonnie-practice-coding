import React from 'react';
import _ from 'lodash';

function Test() {
  const saveKeyword = (record, forbidden) => {
 
    console.log('record', record);
    console.log('forbiden', forbidden)

  };

  const keywordArr = [null, undefined, 1,2]
  const resetArr = keywordArr.filter(Boolean);

  console.log('resetArr', resetArr)


  const test = {a:1, b:2}
  Object.freeze(test)
  test.c = 3;

  console.log(test);


  return <div>
    <button type='button'onClick={()=> saveKeyword("record", "test")}>Test</button>
    <button type='button'onClick={_.partial(saveKeyword,"record", "test")}>Test</button>
  </div>;
}

export default Test;
