const apiDomain = process.env.NEXT_PUBLIC_API || null;

async function fetchProperties() {
  try {
    //handle case of null domain
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/properties`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

//Fetch Single Property
async function fetchProperty(id) {
  try {
    //handle case of null domain
    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/properties/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { fetchProperties, fetchProperty };
