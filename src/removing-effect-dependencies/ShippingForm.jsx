import { useState, useEffect } from 'react';

export function ShippingForm({ country }) {
  const [cities, setCities] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetch(`/api/cities?country=${country}`)
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setCities(json);
        }
      });

    return () => {
      ignore = true;
    };
  }, [country]);

  const [city, setCity] = useState(null);
  const [areas, setAreas] = useState(null);

  useEffect(() => {
    let ignore = false;

    if (city) {
      fetch(`/api/areas?city=${city}`)
        .then((response) => response.json())
        .then((json) => {
          if (!ignore) {
            setAreas(json);
          }
        });
    }
    return () => {
      ignore = true;
    };
  }, [city]);

  // ...
}
