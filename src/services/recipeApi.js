import axios from 'axios'

export const API_URL = 'https://REPLACE_WITH_YOUR_MOCKAPI_URL/recipes'

// TODO (Câu 2): Viết hàm GET danh sách công thức bằng axios
export async function getRecipes() {
  // SV viết code ở đây
}

// TODO (Câu 5): Viết hàm GET chi tiết công thức theo id
export async function getRecipeById(id) {
  // ...
}

// TODO (Câu 7): Viết hàm POST thêm công thức mới
export async function addRecipe(recipe) {
  // ...
}

// TODO (Câu 8): Viết hàm DELETE công thức theo id
export async function deleteRecipe(id) {
  // ...
}

// TODO (Câu 8): Viết hàm PUT cập nhật trạng thái yêu thích (favorite: boolean)
export async function toggleFavorite(id, favorite) {
  // axios.put(`${API_URL}/${id}`, { favorite })
}
