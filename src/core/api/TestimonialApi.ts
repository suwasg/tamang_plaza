export async function fetchTestimonials() {
    try {
      const response = await fetch("https://api.example.com/testimonials"); // Replace with actual API URL
      if (!response.ok) throw new Error("Failed to fetch testimonials");
      return await response.json();
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return [];
    }
  }
  