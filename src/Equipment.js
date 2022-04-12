import { useContext, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import { UserContext } from "./UserContext";

export function Equipment({
  deleteButton,
  editButton,
  index,
  _id,
  description,
  cartQty,
  duration,
  rate,
  pic,
  equipments,
  setEquipmentsList,
}) {
  const [log, cart, updateCart] = useContext(UserContext);
  const product = [_id, description, duration, rate, pic];
  return (
    <div className="equipment_container">
      <div className="sampleproduct">
        <img className="product-pic" src={pic} alt={description} />
        <div className="product-spec">
          <p>{description}</p>
          <p className="rate">{rate}</p>
        </div>
      </div>

      {/* <img className="pic_container" src={pic} alt={description} />
      <div className="spec">
        <h5 className="description">{description}</h5>
        <div className="rate_container">
          <h3 sx={{ marginLeft: "auto" }} className="duration">
            {duration}
          </h3>
          <h3>{rate}</h3> */}
      {/* <ShoppingCartIcon color="primary" /> */}
      <Button
        variant="contained"
        onClick={() => updateCart({ product, payload: "increment" })}
      >
        Add to cart
      </Button>
    </div>
  );
}
