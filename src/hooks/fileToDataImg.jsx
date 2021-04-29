async function fileToDataImg(dataImg) {
  if (!dataImg) return false;

  const convertImg = dataImg => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(dataImg);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const file = await convertImg(dataImg);
  return file;
}

export {fileToDataImg};
