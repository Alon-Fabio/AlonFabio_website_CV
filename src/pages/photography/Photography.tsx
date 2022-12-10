import React, { useEffect, useState } from "react";

// fetch :https://res.cloudinary.com/AlonFabio/image/fetch/
// fetch :https://api.cloudinary.com/v1_1/AlonFabio/resources/image

type TImageList = [
  {
    url: string;
  }
];

const Photography = () => {
  const [imageList, setImagesList] = useState<TImageList>();
  const getImagesUrl = async (action: string) => {
    let status = { proses: "loading", err: "" };
    let response = await fetch(`http://localhost/gallery${action}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ClDFolder: "graphics" }),
    }).catch((err) => {
      status = { proses: "failed", err };
      console.log("catch, failed", err);
    });
    if (status.proses !== "failed") {
      // @ts-ignore
      let data = await response.json();
      console.log("response", data);
      setImagesList(data);
    }
    if (status.proses === "failed") {
      return status.err;
    }
  };

  return (
    <div style={{ height: "100vh" }} className="flexCenter">
      Photography
      <button onClick={() => getImagesUrl("")}>getUrls</button>
      <button onClick={() => getImagesUrl("/update")}>updateUrls</button>
      <ul>
        {imageList?.map((url) => (
          <li key={url.toString()}>{url.toString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default Photography;
