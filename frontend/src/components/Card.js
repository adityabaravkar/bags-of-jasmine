import { useTranslation } from "react-i18next";
import bagImg from "../assets/tote-bag.webp";

const Card = () => {
  const { t } = useTranslation();

  return (
    <div className="col my-3">
      <div className="card h-100 card-gradient-bg border-0 rounded-0">
        <img src={bagImg} className="card-img-top" alt="tote bag" />
        <div className="card-body">
          <h5 className="card-title">Tote bag</h5>
          <div className="btn btn-primary">{t("book")}</div>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            {t("quantity-left", {
              quantity: 1,
            })}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Card;
