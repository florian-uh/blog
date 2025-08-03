/// <reference types="vite/client" />

// Add JSX namespace declaration
declare namespace JSX {
  interface IntrinsicElements {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [elemName: string]: any;
  }
  
  // Add Element type
  type Element = React.ReactElement;
}
