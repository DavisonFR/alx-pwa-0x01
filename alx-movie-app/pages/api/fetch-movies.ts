import { MoviesProps } from "@/interfaces";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    const { year, page, genre } = request.body;
    const date = new Date();
    const queryYear = year || date.getFullYear();

    const apiUrl = `https://moviesdatabase.p.rapidapi.com/titles?year=${queryYear}&sort=year.decr&limit=12&page=${page}${
      genre ? `&genre=${genre}` : ""
    }`;

    const apiResponse = await fetch(apiUrl, {
      headers: {
        "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.MOVIE_API_KEY}`,
      },
    });

    if (!apiResponse.ok) {
      throw new Error("Failed to fetch movies");
    }

    const moviesResponse = await apiResponse.json();
    const movies: MoviesProps[] = moviesResponse.results;

    return response.status(200).json({ movies });
  } else {
    response.setHeader("Allow", ["POST"]);
    response
      .status(405)
      .end(`Method ${request.method} Not Allowed in here`);
  }
}
