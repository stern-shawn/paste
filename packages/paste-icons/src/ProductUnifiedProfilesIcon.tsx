import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductUnifiedProfilesIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductUnifiedProfilesIcon = React.forwardRef<HTMLElement, ProductUnifiedProfilesIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductUnifiedProfilesIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductUnifiedProfilesIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 20 20"
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.513 9.297a2.578 2.578 0 0 1-1.251-2.202c0-1.428 1.18-2.588 2.631-2.588 1.451 0 2.631 1.16 2.631 2.588a2.58 2.58 0 0 1-1.21 2.177c1.728.563 2.98 2.168 2.98 4.054 0 .313-.26.569-.579.569H6.186a.575.575 0 0 1-.578-.569c0-1.859 1.215-3.444 2.905-4.03Zm-.095-2.202c0-.796.66-1.45 1.475-1.45.81 0 1.475.654 1.475 1.45 0 .796-.665 1.45-1.475 1.45s-1.475-.654-1.475-1.45Zm1.539 3.098c1.56 0 2.862 1.11 3.134 2.565H6.822c.272-1.456 1.573-2.565 3.135-2.565Z"
            fill="currentColor"
          />
          <path
            d="M2.076 12.001c.914 3.499 4.149 5.993 7.875 5.993V18c3.66 0 6.887-2.428 7.847-5.902a.564.564 0 0 0-.405-.7.579.579 0 0 0-.711.399c-.821 2.98-3.585 5.06-6.731 5.06-3.097 0-5.802-2.006-6.68-4.866a.584.584 0 0 0 .4-.285.552.552 0 0 0-.017-.58l-.544-.83c-.214-.33-.763-.33-.977 0l-.544.83a.565.565 0 0 0-.017.58c.103.18.292.294.504.295Z"
            clipRule="evenodd"
          />
          <path
            d="M9.95 3.137c3.173 0 5.947 2.141 6.746 5.095a.584.584 0 0 0-.367.278.552.552 0 0 0 .017.58l.544.83a.572.572 0 0 0 .486.262h.005a.572.572 0 0 0 .486-.262l.544-.83a.564.564 0 0 0 .017-.58.583.583 0 0 0-.509-.295h-.037C17.048 4.632 13.748 2 9.951 2 6.14 2 2.798 4.655 2 8.317a.58.58 0 0 0 1.133.239c.683-3.139 3.377-5.419 6.818-5.419Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.513 9.297a2.578 2.578 0 0 1-1.251-2.202c0-1.428 1.18-2.588 2.631-2.588 1.451 0 2.631 1.16 2.631 2.588a2.58 2.58 0 0 1-1.21 2.177c1.728.563 2.98 2.168 2.98 4.054 0 .313-.26.569-.579.569H6.186a.575.575 0 0 1-.578-.569c0-1.859 1.215-3.444 2.905-4.03Zm-.095-2.202c0-.796.66-1.45 1.475-1.45.81 0 1.475.654 1.475 1.45 0 .796-.665 1.45-1.475 1.45s-1.475-.654-1.475-1.45Zm1.539 3.098c1.56 0 2.862 1.11 3.134 2.565H6.822c.272-1.456 1.573-2.565 3.135-2.565Z"
            fill="currentColor"
          />
          <path
            d="M2.076 12.001c.914 3.499 4.149 5.993 7.875 5.993V18c3.66 0 6.887-2.428 7.847-5.902a.564.564 0 0 0-.405-.7.579.579 0 0 0-.711.399c-.821 2.98-3.585 5.06-6.731 5.06-3.097 0-5.802-2.006-6.68-4.866a.584.584 0 0 0 .4-.285.552.552 0 0 0-.017-.58l-.544-.83c-.214-.33-.763-.33-.977 0l-.544.83a.565.565 0 0 0-.017.58c.103.18.292.294.504.295Z"
            fill="currentColor"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductUnifiedProfilesIcon.displayName = "ProductUnifiedProfilesIcon";
export { ProductUnifiedProfilesIcon };
