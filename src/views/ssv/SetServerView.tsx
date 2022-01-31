import { isMobile } from 'react-device-detect';
import { useParams } from 'react-router-dom';

import MobileSSV from './MobileSSV';
import SSV from './SSV';

export default function SetServerView() {
  // @ts-ignore: Type error
  const { urlTo } = useParams();
  if (isMobile) return <MobileSSV />;
  else return <SSV urlTo={urlTo} />;
}
