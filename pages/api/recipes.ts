export default async function handler(req: any, res: any) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RapidAPI_Key || '',
      'X-RapidAPI-Host': process.env.RapidAPI_Host || '',
      "Accept": "*/*",

    }
  };

  console.log(options)
  const { searchwords } = req.query
  console.log(searchwords)

  const urlToFetch = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?' + new URLSearchParams({
    query: searchwords,
    diet: 'vegetarian',
    number: '100',
    addRecipeInformation: 'True',
    instructionsRequired: 'True',
    fillIngredients: 'True'
  })

  console.log(urlToFetch)
  try {
    const response = await fetch(urlToFetch, options)

    const data = await response.json()
    res.status(200).json(data["results"])

  } catch (error: any) {
    console.error(error.response);
  }

}