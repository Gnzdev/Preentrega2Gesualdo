import { useEffect, useState } from "react";
import { ItemDetail } from "../common/ItemDetail";
import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    getProduct().then((resp) => console.log(resp));
  }, []);

  return <>{item && <ItemDetail {...item} />}</>;
};
