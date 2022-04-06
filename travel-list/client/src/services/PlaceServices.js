import Client from '.'

export const GetPlaces = async () => {
  try {
    const response = await Client.get('/places')
    console.log(response)
    // return response.data
  } catch (error) {
    throw error
  }
}
