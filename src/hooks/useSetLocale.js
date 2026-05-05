import { useContext } from "react";
import { LocaleContext } from "../contexts/LocaleContext";

export default function useSetLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("반드시 LocaleProvider 안에서 사용해야 합니다.");
  }

  const { setLocale } = context;

  return setLocale;
}
