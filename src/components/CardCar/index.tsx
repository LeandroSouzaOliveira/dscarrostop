import "./styles.css";
import carImg from "../../assets/car.png";

export default function CardCar() {
  return (
    <div className="dsct-come-visit-items">
      <img className="dsct-come-visit-img" src={carImg} alt="Audi tt" />
      <p className="dsct-come-visit-par">Lorem ipsum dolor</p>
    </div>
  );
}
