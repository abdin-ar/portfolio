import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * A function that calculates the scroll padding
 * @param {boolean} inputPadding Is there a scrollPaddingTop?
 * @returns Scroll padding
 */
function calculateScrollPadding(inputPadding = false) {
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

/**
 * @type {React.FC<{scrollPaddingTop?:boolean, editPaddingTop?:number}>}
 */
const ScrollToLink = ({ scrollPaddingTop, editPaddingTop = 0 }) => {
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

    const scrollPadding =
      calculateScrollPadding(scrollPaddingTop) + editPaddingTop;

    window.scrollTo(
      window.scrollX + hashEl.getBoundingClientRect().x,
      window.scrollY + hashEl.getBoundingClientRect().y - scrollPadding
    );
    setTimeout(
      () =>
        window.scrollTo(
          window.scrollX + hashEl.getBoundingClientRect().x,
          window.scrollY + hashEl.getBoundingClientRect().y - scrollPadding
        ),
      100
    );
  }, [pathname, hash, scrollPaddingTop]);

  return null;
};

export default ScrollToLink;
