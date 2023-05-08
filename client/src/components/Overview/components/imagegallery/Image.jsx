import React from 'react';

export default function Image({styles}) {
  console.log(styles.results?.[0]?.photos);
  return (
    <div className="productImage">
      <img src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/3/22/0/shutterstock_national-puppy-day-224423782.jpg.rend.hgtvcom.966.725.suffix/1521744674350.jpeg" alt="TEMP ALT TEXT, product" height="400" width="500" />
    </div>
  );
}
