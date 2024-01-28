import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchBar from '@components/shared/searchBar/SearchBar';
import Product from '@components/shared/searchedProduct/Product';
import Footer from '@routes/layouts/Footer/Footer';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<ProductData[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const termFromUrl = new URLSearchParams(location.search).get('term');
    if (termFromUrl) {
      setSearchTerm(termFromUrl);
      handleSearch(termFromUrl);
    }
  }, [location.search]);

  const handleSearch = (term: string) => {
    const xfakeSearchResults: ProductData[] = [
      { id: 1, title: 'Roxie Kręgiel płyta', price: 29.99, description: 'o boze roksana', image: '/x/roxie.jpg' },
    ];

    if (term === 'roxie') {
      setSearchResults(xfakeSearchResults);
      navigate(`/search?term=${term}`);
    } else {
      const fakeSearchResults: ProductData[] = [
        { id: 1, title: 'Produkt 1', price: 29.99, description: 'Opis produktu 1', image: '/x/chipichipi.jpg' },
        { id: 2, title: 'Produkt 2', price: 49.99, description: 'Opis produktu 2', image: '/x/chipichipi.jpg' },
        { id: 3, title: 'Produkt 3', price: 39.99, description: 'Opis produktu 3', image: '/x/chipichipi.jpg' },
        { id: 4, title: 'Produkt 4', price: 59.99, description: 'Opis produktu 4', image: '/x/chipichipi.jpg' },
        { id: 5, title: 'Produkt 5', price: 19.99, description: 'Opis produktu 5', image: '/x/chipichipi.jpg' },
      ];

      setSearchResults(fakeSearchResults);
      navigate(`/search?term=${term}`);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div style={{ maxWidth: '900px', margin: '40px auto 20px auto' }}>
        <TextField
          label="Wyszukaj"
          variant="outlined"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch(searchTerm);
            }
          }}
          fullWidth
          style={{ marginBottom: '20px' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => handleSearch(searchTerm)}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div>
          <h2>Wyniki wyszukiwania:</h2>
          <div style={{ marginBottom: '15px' }}></div>
          {searchResults.map((result) => (
            <Product key={result.id} {...result} />
          ))}
        </div>
      </div>
    </>
  );
}
