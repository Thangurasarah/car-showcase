export async function fetchCars(){
    const headers={
        'x-rapidapi-key': 
        'c6931ba0c8mshdaabe482d82d205p15b110jsn6adb21065da6',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });
    const result = await response.json ();
    
    return result;
}