import * as React from "react";

declare module "react-rating-stars-component" {
  interface IProps {
    count: number;
    onChange: () => void;
    size: number;
    emptyIcon: React.Element;
    halfIcon: React.Element;
    fullIcon: React.Element;
    activeColor: string;
    color: string;
  }

  const value: React.FC<IProps>;
  export default value;
}
