module.exports.createUserImgPath = ({
  folder,
  customerNumber,
  customerPhoto,
}) => {
  if (/^http./gi.test(customerPhoto)) return customerPhoto;
  if (/^data:image/gi.test(customerPhoto)) return customerPhoto;
  const basePath = '/uploads/user/';
  if (!folder) return `${basePath}${customerNumber}/${customerPhoto}`;
  if (folder) return `${basePath}${customerNumber}`;
};
