import { useState } from 'react';
import { TextField, IconButton, Box } from '@mui/material';

type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (onSearch) onSearch(searchTerm);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" width="900px" margin="0 auto">
      <TextField
        label="Wprowadź szukaną frazę..."
        variant="outlined"
        value={searchTerm}
        onChange={handleInputChange}
        fullWidth
      />
      <IconButton onClick={handleSearch}>
        {/* Tutaj dodaj ikonę lupki */}
        Szukaj
      </IconButton>
    </Box>
  );
}
