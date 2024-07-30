import { useState, useEffect } from 'react';
import { useFetchData } from './useFetchData';

export function ShippingForm({ country }) {
  const citiesUrl = `/api/cities?country=${country}`;
  const cities = useFetchData(citiesUrl);
  const [city, setCity] = useState(null);
  const areasUrl = city ? `/api/cities?country=${city}` : null;
  const areas = useFetchData(areasUrl);

  // ...
}
