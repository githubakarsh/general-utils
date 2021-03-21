'use strict';

import _ from 'lodash';

const regexList = {
  alpha: /^[a-z]+(([-']|\s)?[a-z]+)*$/i,
  alphaTwoSpaces: /^([a-z]+[-']*[a-z]+(\s(?!$))?){1,2}([a-z]+[-']*[a-z]+)*?$/i,
  alphaSpecial: /^[a-z]+[!#%&'*+-/=?^_`{|}~]+(([-']|\s)?[a-z]+[!#%&'*+-/=?^_`{|}~]]+)*$/i,
  alphanumeric: /^((^[a-z]{2}\.\s)?((\w|\w')\s[a-z]{2}\.\s)?([a-z0-9]+-[a-z0-9]+)?(\/)?([a-z]{1}'[a-z]+|\s[a-z]{1}'[a-z]+|[a-z]'\s[a-z]+|[a-z]'[s]\s[a-z]+)*([a-z0-9]+\s{0,1})?)+(\w{2,}'|[\w]|\w{2,}'[s])$/i,
  alphanumericPunctuation: /^([a-z0-9\-_,./£$?!&:]*)$/i,
  currency: /^[0-9]*$/,
  email: /^([-a-z0-9!$%&*_/=+#}{'?|]+(\.[-a-z0-9!$%&*_/=+#}{'?|]+)*)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]+)$/i,
  number: /^[0-9]+$/,
  password: /^((?=.*\d)(?=.*[a-zA-Z])(?=.*['!"$%^&*()_\\\-/+={}[\]@‘~#?|<>,.;:])[a-zA-Z\d¬'!"$%^&*()_\\\-/+={}[\]@~#?|<>,.;:]{8,16})$/,
  mobilePhone: /^([\d]{10})$/,
  telephonePin: /^(?!(.)\1{3})(?!0123|1234|2345|3456|4567|5678|6789|7890|0987|9876|8765|7654|6543|5432|4321|3210)\d{4}$/,
  username: /^[a-zA-Z0-9]{6,16}$/,
  debitCardPan: /^([0-9]{5}|[0-9]{16}|[0-9]{16})$/,
  alphanumericSpecial: /^(?![\d]{10}$)([a-zA-Z0-9.@!#$&'*=+\-_]{6,70})$/i,
  alphanumericSpecialUsername: /^([a-zA-Z0-9.@!#$&'*=+\-_]{6,70})$/i,
};

export default _.extend(
  {
    isValid(value, regexConstant) {
      const regExp = new RegExp(regexConstant);
      return regExp.test(value);
    },
  },
  { regexes }
);
