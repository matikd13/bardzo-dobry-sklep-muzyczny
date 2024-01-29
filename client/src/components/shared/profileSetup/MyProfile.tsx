import { Button, Grid, Stack } from '@mui/material';
import { TextInput } from '../inputs/TextInput';
import useProfile from './useProfile';

export default function MyProfile() {
  const { control, handleSubmit } = useProfile();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack spacing={6} justifyContent="center" alignItems="center" padding={4}>
            <div className="flex space-x-6 bg-white p-4">
              <div className="flex flex-col space-y-2">
                <TextInput label="Imie" disabled controllerProps={{ control, name: 'firstName' }} />
                <TextInput label="Nazwisko" disabled controllerProps={{ control, name: 'lastName' }} />
                <TextInput label="E-mail" disabled controllerProps={{ control, name: 'email' }} />
                <TextInput label="Numer Telefonu" required controllerProps={{ control, name: 'phoneNumber' }} />
              </div>
              <div className="flex flex-col space-y-2">
                <TextInput label="Ulica" required controllerProps={{ control, name: 'street' }} />
                <TextInput label="Numer domu/mieszkania" required controllerProps={{ control, name: 'streetNumber' }} />
                <TextInput label="Kod pocztowy" required controllerProps={{ control, name: 'postalCode' }} />
                <TextInput label="Miejscowość" required controllerProps={{ control, name: 'city' }} />
              </div>
            </div>
            <Button variant="contained" onClick={handleSubmit}>
              Zapisz
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
