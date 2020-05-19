function base64encode(value) {

	if (typeof window === 'undefined') {
		
		return (Buffer.from(value).toString('base64'));
		
	}
	
	return btoa(value);

}

function base64decode(value) {

	if (typeof window === 'undefined') {
		
		return (Buffer.from(value, 'base64').toString());
		
	}
	
	return atob(value);

}

function isBase64(str) {
    if (str ==='' || str.trim() ===''){ return false; }
    try {
        return base64encode(base64decode(str)) == str;
    } catch (err) {
        return false;
    }
}

function rc4(str, key) {
    let s = [], j = 0, x, res = '';
    for (let i = 0; i < 256; i++) {
        s[i] = i;
    }
    for (i = 0; i < 256; i++) {
        j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
        x = s[i];
        s[i] = s[j];
        s[j] = x;
    }
    i = 0;
    j = 0;
    for (let y = 0; y < str.length; y++) {
        i = (i + 1) % 256;
        j = (j + s[i]) % 256;
        x = s[i];
        s[i] = s[j];
        s[j] = x;
        res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
    }
    return res;
}

function rc4Base64Encrypt(str, key) { return base64encode(rc4(str, key)); }

function rc4Base64Decrypt(str, key) { return rc4(base64decode(str), key); }

function rc4Base64(str, key) {

    return isBase64(str) ? rc4Base64Decrypt(str, key) : rc4Base64Encrypt(str, key);

}

module.exports = rc4;
module.exports = isBase64;
module.exports = rc4Base64Encrypt;
module.exports = rc4Base64Decrypt;
module.exports = rc4Base64;
module.exports.rc4 = rc4;
module.exports.isBase64 = isBase64;
module.exports.rc4Base64Encrypt = rc4Base64Encrypt;
module.exports.rc4Base64Decrypt = rc4Base64Decrypt;
module.exports.rc4Base64 = rc4Base64;