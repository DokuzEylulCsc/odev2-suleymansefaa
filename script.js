 const mapping = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
];

var intToRoman = function(num) {
    let str = '';

    for (let i = 0; i < mapping.length; i++) {
        const [val, char] = mapping[i];

        if (num >= val) {
            while (num >= val) {
                num -= val;
                str += char;
            }
        }
    }

    return str;
};

var romanToInt = function(s) {
    if (!s || s.length === 0) {
      return 0;
    }
  
    const map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);
  
    let i = s.length - 1;
    let result = map.get(s[i]);
  
    while (i > 0) {
      const curr = map.get(s[i]);
      const prev = map.get(s[i - 1]);
  
      if (prev >= curr) {
        result += prev;
      } else {
        result -= prev;
      }
  
      i--;
    }
  
    return result;
  };



while (true) {

let menu ="1-Integer to roman\n" +
"2-Roman to integer\n" +
"3-Exit\n"; 

let num = prompt(menu);

if (num == 1) {
    let num2 = prompt("Please enter integer: ");
    if (num2 > 0 && num2 < 4000 ) {
        alert(intToRoman(num2));   
    } else {
        alert("Please enter a number from 1 to 3999");
    }
} else if (num == 2) {
    let num3 = prompt("Please enter roman: ");
    let num4 = romanToInt(num3.toUpperCase());
    
    if (num4 > 0 && num4 < 4000) {
        alert(num4);   
    } else {
        alert("Please enter a number from I to MMMCMXCIX");
    }
} else if (num == 3) {
    break;
} else {
    alert("Invalid value");
    }
}

// Reference https://leetcode.com/