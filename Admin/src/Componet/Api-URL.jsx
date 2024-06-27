const url = 'http://localhost:5000';

// API Endpoints
export const FoodItemsCreateAPI = `${url}/api/allFood/AllFoodCreate`;
export const FoodgetByID_API = (id) => `${url}/api/allFood/getFoodById/${id}`;
export const FoodUpdate_API = (id) => `${url}/api/allFood/updateFood/${id}`;
export const Foodgetall_API = `${url}/api/allFood/getAllFood`;
export const FoodDelete_API = (id) => `${url}/api/allFood/deleteFood/${id}`;