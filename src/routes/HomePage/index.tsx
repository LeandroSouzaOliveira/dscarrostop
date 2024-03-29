import "./styles.css";
import CardCar from "../../components/CardCar";
import Header from "../../components/Header";
import CardComments from "../../components/CardComments";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section id="dsct-come-visit">
          <h1 className="dsct-title">Venha nos visitar</h1>
          <div className="dsct-come-visit-container">
            <CardCar />
            <CardCar />
          </div>
        </section>
        <section id="dsct-comments">
          <h1 className="dsct-title">O que estão dizendo</h1>
          <div className="dsct-container">
            <CardComments />
            <CardComments />
            <CardComments />
            <CardComments />
            <CardComments />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
