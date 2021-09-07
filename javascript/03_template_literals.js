var person = "Mike";
var age = 28;

function myTag(strings, personExp, ageExp) {
  var str0 = strings[0]; // "that "
  var str1 = strings[1]; // " is a "

  // 사실 이 예제의 string에서 표현식이 두 개 삽입되었으므로
  // ${age} 뒤에는 ''인 string이 존재하여
  // 기술적으로 strings 배열의 크기는 3이 됩니다.
  // 하지만 빈 string이므로 무시하겠습니다.
  // var str2 = strings[2];

  var ageStr;
  if (ageExp > 99) {
    ageStr = "centenarian";
  } else {
    ageStr = "youngster";
  }

  // 심지어 이 함수내에서도 template literal을 반환할 수 있습니다.
  return str0 + personExp + str1 + ageStr;
}

var output = myTag`that ${person} is a ${age}`;

console.log(output);


//=================================================================


function template(strings, ...keys) {
    return (function(...values) {
      var dict = values[values.length - 1] || {};
      var result = [strings[0]];
      keys.forEach(function(key, i) {
        var value = Number.isInteger(key) ? values[key] : dict[key];
        result.push(value, strings[i + 1]);
      });
      return result.join('');
    });
  }
  
  var t1Closure = template`${0}${1}${0}!`;
  t1Closure('Y', 'A');  // "YAY!"
  var t2Closure = template`${0} ${'foo'}!`;
  t2Closure('Hello', {foo: 'World'});  // "Hello World!"