import axios from "axios";

export async function fetchAnagram(url: string) {
  try {
    const response = await axios.get(url);
    const data = await response.data;

    if (response.status !== 200) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    console.log("Anagram data fetched successfully:", data);
    return data;
  } catch (error) {
    console.error("Error fetching anagram data:", error);
    return null;
  }
}
