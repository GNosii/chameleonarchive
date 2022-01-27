import { isMobile } from 'react-device-detect';
import { useParams } from 'react-router-dom';

import MobileSSV from './subview/MobileSSV';
import SSV from './subview/SSV';

export default function SetServerView() {
  // @ts-ignore: Type error
  const { urlTo } = useParams();
  if (isMobile) return <MobileSSV />;
  else return <SSV urlTo={urlTo} />;
}
