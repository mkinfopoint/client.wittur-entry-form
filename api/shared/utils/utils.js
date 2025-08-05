const moment = require('moment');
const CryptoJs = require('crypto-js');

const StoreImage = async (files = [], type, keyId) => {
  if (!type) return;
  if (!keyId) return;
  var resImages = [];
  if (files.length > 0) {
    let queryData = [];
    files.map((file) => {
      queryData.push({
        type: type,
        keyId: keyId,
        filePath: file.path,
      });
    });
    await FilesMeta.bulkCreate(queryData);
    resImages = await FilesMeta.findAll({
      where: {
        type: type,
        keyId: keyId,
        isDeleted: false,
      },
    });
  }
  return resImages;
};

const slugCreator = (data) => {
  return data
    ?.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace all non-alphanumeric characters (except hyphens) with a hyphen
    .replace(/^-+|-+$/g, '') // Remove hyphens from the start or end of the string
    .replace(/-+/g, '-');
};

const encDec = (text, type = 'enc') => {
  const secretKey = process.env.HASH_KEY || '';
  let retVal = text;

  if (type === 'dec') {
    const bytes = CryptoJs.AES.decrypt(text, secretKey);
    if (bytes.toString(CryptoJs.enc.Utf8)) {
      retVal = bytes.toString(CryptoJs.enc.Utf8);
    }
  } else if (type === 'enc') {
    retVal = CryptoJs.AES.encrypt(text, secretKey).toString();
  }
  return retVal;
};

const setCookies = (refreshToken, res) => {
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true, // send only over HTTPS (set to false in local dev)
    sameSite: 'Strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
};

module.exports = {
  StoreImage,
  slugCreator,
  encDec,
  setCookies,
};
