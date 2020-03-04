import Tippy from '@tippy.js/react';
import React from 'react';

import { styled } from ':/theme';

/*-----------------------------------------------------------------------------*/
type AppMenuProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
const AppMenuSkelton = (props: AppMenuProps) => <div {...props} />;
export const AppMenuWrapper = styled(AppMenuSkelton)<AppMenuProps>`
  display: block;
  color: ${props => `${props.theme.color.textE} !important;`};
  position: fixed;
  top: 1em;
  right: 1em;
  z-index: 100;
  margin: 0;
  padding: 0;
  line-height: 1em;
  cursor: pointer;
`;

export const AppMenuTippy = styled(Tippy)`
  background: ${props => props.theme.color.backgroundC};
  .tippy-content {
    padding: 0;
  }

  /* Styling the arrow for different placements */
  &[data-placement^='top'] {
    .tippy-arrow {
      border-top-color: ${props => props.theme.color.backgroundC};
    }
  }
  &[data-placement^='left'] {
    .tippy-arrow {
      border-left-color: ${props => props.theme.color.backgroundC};
    }
  }
  &[data-placement^='right'] {
    .tippy-arrow {
      border-right-color: ${props => props.theme.color.backgroundC};
    }
  }
  &[data-placement^='bottom'] {
    .tippy-arrow {
      border-bottom-color: ${props => props.theme.color.backgroundC};
    }
  }
`;
