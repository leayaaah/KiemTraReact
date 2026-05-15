import axios from 'axios'

export const API_URL = 'https://REPLACE_WITH_YOUR_MOCKAPI_URL/recipes'

const FALLBACK_RECIPES = [
  {
    id: 1,
    title: 'Phở bò',
    difficulty: 'medium',
    cookTime: 180,
    servings: 4,
    ingredients: ['500g bánh phở', '1kg xương bò', 'Gia vị phở'],
    description: 'Bước 1: Ninh xương.\nBước 2: Chuẩn bị bánh phở và thịt.\nBước 3: Chan nước dùng.',
    favorite: false,
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43'
  }
]

// TODO (Câu 2): Viết hàm GET danh sách công thức bằng axios
export async function getRecipes() {
  try {
    const response = await axios.get(API_URL)
    if (Array.isArray(response.data)) {
      return response.data
    }
    console.warn(
      `Recipe API returned invalid data from ${API_URL} (type: ${typeof response.data}), using fallback recipes.`,
      response.data
    )
    return FALLBACK_RECIPES
  } catch (error) {
    console.warn(`Cannot fetch recipes from ${API_URL}, using fallback recipes.`, error)
    return FALLBACK_RECIPES
  }
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
