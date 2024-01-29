import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Fuse from 'fuse.js';
import { gql } from '@apollo/client';
import SerchedProduct from '@components/shared/searchedProduct/SerchedProduct';
import { SearchPage_ProductFragment, useSearchPage_ProductsQuery } from '@generated/graphql';

gql`
  query SearchPage_Products {
    products {
      ...ProductsList_Product
    }
  }

  fragment SearchPage_Product on Product {
    id
    name
    author
    quantity
    image
    price
  }
`;

const FUSE_PRODUCTS_OPTIONS = {
  includeScore: true,
  threshold: 0.4,
  keys: ['name', 'author'],
};

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = useSearchPage_ProductsQuery();

  const products = data?.products ?? [];

  const [searchResults, setSearchResults] = useState<SearchPage_ProductFragment[]>(products);

  const handleSearch = (term: string) => {
    const fuseProducts = new Fuse(products, FUSE_PRODUCTS_OPTIONS);

    const resultProducts = fuseProducts.search(term);

    setSearchResults(term === '' ? products : resultProducts.map((e) => e.item));
    navigate(`/search?term=${term}`);
  };

  useEffect(() => {
    const termFromUrl = new URLSearchParams(location.search).get('term');
    if (termFromUrl) {
      setSearchTerm(termFromUrl);
      handleSearch(termFromUrl);
    }
  }, [location.search]);

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
            if (e.key === 'Enter') handleSearch(searchTerm);
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
            <SerchedProduct key={result.id} product={result} />
          ))}
        </div>
      </div>
    </>
  );
}
