import { useTranslation } from "react-i18next";
import { ReactComponent as PaymentEn } from "../assets/payment-en.svg";
import { ReactComponent as PaymentMa } from "../assets/payment-ma.svg";

const Payment = () => {
  const { i18n } = useTranslation();

  return i18n.language === "ma" ? <PaymentMa /> : <PaymentEn />;
};

export default Payment;
