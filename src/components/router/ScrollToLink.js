import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function calculateScrollPadding(inputPadding) {
  let scrollPadding;
  if (!inputPadding) {
    scrollPadding = 0;
  } else {
    scrollPadding = window.getComputedStyle(
      document.documentElement
    ).scrollPaddingTop;
  }

  if (typeof scrollPadding === "string") {
    scrollPadding = parseInt(scrollPadding.replace("px", ""));
  }
  return scrollPadding;
}

const ScrollToLink = ({ scrollPaddingTop, editPaddingTop }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const hashEl = document.getElementById(hash.slice(1));
    if (!hashEl) {
      window.scrollTo(0, 0);
      return;
    }

    let editPadding = 0;
    if (editPaddingTop) {
      editPadding = editPaddingTop;
    }

    const scrollPadding =
      calculateScrollPadding(scrollPaddingTop) + editPadding;

    window.scrollTo(
      window.scrollX + hashEl.getBoundingClientRect().x,
      window.scrollY + hashEl.getBoundingClientRect().y - scrollPadding
    );
    window.scrollTo(
      window.scrollX + hashEl.getBoundingClientRect().x,
      window.scrollY + hashEl.getBoundingClientRect().y - scrollPadding
    );
  }, [pathname, hash, scrollPaddingTop]);

  return null;
};

export default ScrollToLink;
