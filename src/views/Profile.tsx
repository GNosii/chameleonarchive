import { useParams } from 'react-router-dom';
import ProfileContainer from '../components/profile/ProfileContainer';

export default function Profile({ type, dataEndpoint }: ProfileViewProps) {
  let { name }: ProfileViewParams = useParams();

  // note that even if this is mostly the same code as the Listing view,
  // the heading is rendered in the ProfileContainer because it needs the formatted name.
  return (
    <div>
      <ProfileContainer type={type} endpoint={dataEndpoint + name} />
    </div>
  );
}

interface ProfileViewProps {
  type: string;
  dataEndpoint: string;
}

interface ProfileViewParams {
  name: string;
}
