import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import CardList from "../components/CardList";
import { Spinner } from "native-base";

const getPhotos = () => {
  return fetch("https://picsum.photos/v2/list")
    .then(res => res.json())
    .catch(err => console.error(err));
}

const HomeScreen = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const photos = await getPhotos();
      setLoading(false);
      setPhotos(photos);
    };
    init();
  }, [photos])
  const content = loading ? <Spinner /> : <CardList photos={photos} />
  return <Layout>{content}</Layout>
}

export default HomeScreen;