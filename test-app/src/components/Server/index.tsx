import React, { useState, useEffect } from "react";

interface IDataObj {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  launches: [
    {
      id: string;
      provider: string;
    }
  ];
  events: [
    {
      id: string;
      provider: string;
    }
  ];
}

const Server = () => {
  const [data, setData] = useState<IDataObj | {}>({});

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/blogs")
      .then((response) => response.json())
      // .then((response) => console.log(response));
  }, []);

  return <div>Blogs data</div>;
};

export default Server;
