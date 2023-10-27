const isDOM = !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.documentElement
  );
  


/**
 * @description
 * This hook was adapted from the use hooks ts site
 * @see https://usehooks-ts.com/react-hook/use-ssr
 */
function useSsr() {
  return {
    isBrowser: isDOM,
    isServer: !isDOM,
  };
}

export default useSsr;
