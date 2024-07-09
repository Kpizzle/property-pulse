'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProperty } from 'utils/requests';

const PropertyPage = () => {
  //get the id from the url
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [setLoading, setSetLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.error('Error fetching property:', error);
      } finally {
        setSetLoading(false);
      }
    };

    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  return <div>Property Page [id]</div>;
};

export default PropertyPage;