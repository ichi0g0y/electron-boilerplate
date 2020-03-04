import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import { WindowClose } from './styled/Close.styled';

/*-----------------------------------------------------------------------------*/
type CloseProps = { hover: boolean; onClick: () => void; handleMouseEnter: () => void };
export const Close: React.FC<CloseProps> = ({ hover, onClick, handleMouseEnter }) => {
  return <WindowClose icon={faTimes} hover={hover} onMouseEnter={handleMouseEnter} onClick={onClick} />;
};
