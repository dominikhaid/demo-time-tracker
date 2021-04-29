async function imgToDataImg(url) {
  if (!url) return false;

  let img = new Image();
  const canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');

  const height = 200;
  const width = 200;
  canvas.width = width;
  canvas.height = height;

  let newimg = await new Promise((resolve, reject) => {
    img.onload = function () {
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      ctx.drawImage(this, 0, 0);
      canvas.toBlob(
        function (img) {
          resolve(img);
        },
        'image/png',
        0.75,
      );
    };

    img.crossOrigin = '';
    img.src = url;
  });

  let dataImg = await new Promise((resolve, reject) => {
    var a = new FileReader();
    a.onload = function (e) {
      resolve(e.target.result);
    };

    a.readAsDataURL(newimg);
  });

  return dataImg;
}

export {imgToDataImg};
