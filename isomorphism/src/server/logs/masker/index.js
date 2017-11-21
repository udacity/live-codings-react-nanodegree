import cnsr from 'cnsr';

export default function masker(obj) {
  const attrToMask = [
    'cpf',
    'password',
    'postcode',
    'number',
    'authCode',
    'verificationCode',
    'holder',
    'expirationMonth',
    'expirationYear',
    'taxDocument',
  ];

  return JSON.stringify(cnsr(obj, attrToMask));
}

