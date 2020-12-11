import HttpRequest from './http-request'

class FoodService extends HttpRequest {
  async fetch() {
    const {data} = await this.get('api/food');
    return data;
  }

  async add(food) {
    const {data} = await this.post('api/food', { 
      name: food.name 
    });
    return data;
  }

  async edit(food) {
    const {data} = await this.put(`api/food/${food.id}`, { 
      name: food.name 
    });
    return data;
  }
  
  async remove(id) {
    await this.delete(`api/food/${id}`);
  }
}

export default FoodService