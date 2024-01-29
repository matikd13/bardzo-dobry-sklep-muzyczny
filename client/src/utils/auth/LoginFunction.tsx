import { useAuth0 } from '@auth0/auth0-react';
import { IconButton } from '@mui/material';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';

export function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <IconButton onClick={() => void loginWithRedirect()}>
      <PersonOutlineTwoToneIcon sx={{ fontSize: '4rem' }} />
    </IconButton>
  );
}

// export const LogoutButton = () => {

// };

// export default function TestPage() {
//   return (
//     <>
//       <LoginButton />
//       <LogoutButton />
//     </>
//   );
// }
