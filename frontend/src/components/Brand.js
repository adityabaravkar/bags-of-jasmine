import { useTranslation } from "react-i18next";
import { ReactComponent as BrandEn } from "../assets/brand-en.svg";
import { ReactComponent as BrandMa } from "../assets/brand-ma.svg";

const Brand = (props) => {
  const { i18n } = useTranslation();

  return i18n.language === "ma" ? (
    <BrandMa {...props} />
  ) : (
    <BrandEn {...props} />
  );
};

export default Brand;
