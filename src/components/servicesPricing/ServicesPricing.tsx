import "../../ui/container.css";
import { PriceTable } from "../priceTable/PriceTable";
import { SliderPartners } from "../sliderPartners/SliderPartners";
import "./servicesPricing.css";

export const ServicesPricing = () => {
  return (
    <section className="servicesPricing__section">
      <div className="container">
        <h2 className="servicesPricing__title">Pricing</h2>
        <p className="servicesPricing__text">
          We offer you three categories of construction.
        </p>
        <PriceTable />
        <div className="servicesPricing__wrapper--partners">
          <h2 className="servicesPricing__title servicesPricing__title--partners">
            Supported by 12+ partners
          </h2>
          <SliderPartners />
        </div>
      </div>
    </section>
  );
};
