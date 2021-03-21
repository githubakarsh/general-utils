import JSEncrypt from 'jsencrypt';
import _ from 'lodash';
const Encryption = {
  encrypt(publicKey, value) {
    if (!_.isString(value) && !_.isNumber(value)) {
      return undefined;
    }

    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    return encrypt.encrypt(value);
  },
};

export default Encryption;
