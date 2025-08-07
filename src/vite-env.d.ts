/// <reference types="vite/client" />

declare module '*.css' {
  const classes: { [className: string]: string };
  export default classes;
}

// Add JSX namespace declaration
declare namespace JSX {
  interface IntrinsicElements {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [elemName: string]: any;
  }
  
  // Add Element type
  type Element = React.ReactElement;
}
