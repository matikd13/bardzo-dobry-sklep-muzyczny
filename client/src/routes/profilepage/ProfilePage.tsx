import MyProfile from '@components/shared/profileSetup/MyProfile';
import { useUserContext } from '@utils/auth/UserContext';

export default function ProfilePage() {
  const { userId } = useUserContext();

  return <>{userId && <MyProfile />}</>;
}
