
export const fetchLandingPages = async () => {
    try {
      const response = await fetch("http://localhost:6000/api/v1/landing");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch landing pages:", error);
      throw error;
    }
  };
  