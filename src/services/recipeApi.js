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
  },
  {
    id: 2,
    title: 'Gỏi cuốn',
    difficulty: 'easy',
    cookTime: 30,
    servings: 2,
    ingredients: ['Bánh tráng', 'Tôm', 'Thịt luộc', 'Rau sống', 'Bún'],
    description: 'Bước 1: Chuẩn bị nguyên liệu.\nBước 2: Cuốn bánh tráng với nhân.\nBước 3: Chấm nước mắm pha.',
    favorite: true,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'
  },
  {
    id: 3,
    title: 'Bánh mì thịt',
    difficulty: 'easy',
    cookTime: 15,
    servings: 1,
    ingredients: ['Bánh mì', 'Thịt nướng', 'Pate', 'Rau ngò', 'Dưa leo'],
    description: 'Bước 1: Nướng thịt và chuẩn bị nhân.\nBước 2: Cắt bánh mì và phết pate.\nBước 3: Cho nhân vào bánh và thưởng thức.',
    favorite: false,
    image: 'https://images.unsplash.com/photo-1542831371-d531d36971e6'
  },
  {
    id: 4,
    title: 'Bún chả',
    difficulty: 'medium',
    cookTime: 60,
    servings: 3,
    ingredients: ['Bún', 'Thịt nướng', 'Rau sống', 'Nước mắm pha'],
    description: 'Bước 1: Nướng thịt và chuẩn bị nước chấm.\nBước 2: Chuẩn bị bún và rau sống.\nBước 3: Ăn kèm bún, thịt và rau với nước chấm.',
    favorite: true,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'
  },
  {
    id: 5,
    title: 'Cơm tấm',
    difficulty: 'easy',
    cookTime: 20,
    servings: 1,
    ingredients: ['Gạo tấm', 'Sườn nướng', 'Trứng ốp la', 'Đồ chua'],
    description: 'Bước 1: Nấu cơm tấm.\nBước 2: Nướng sườn và chiên trứng.\nBước 3: Dọn cơm tấm với sườn, trứng và đồ chua.',
    favorite: false,
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2'
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
  const response = await axios.get(`${API_URL}/${id}`)
  return response.data
}

// TODO (Câu 7): Viết hàm POST thêm công thức mới
export async function addRecipe(recipe) {
  const response = await axios.post(API_URL, recipe)
  return response.data
}

// TODO (Câu 8): Viết hàm DELETE công thức theo id
export async function deleteRecipe(id) {
  await axios.delete(`${API_URL}/${id}`)
}

// TODO (Câu 8): Viết hàm PUT cập nhật trạng thái yêu thích (favorite: boolean)
export async function toggleFavorite(id, favorite) {
  const response = await axios.put(`${API_URL}/${id}`, { favorite })
  return response.data
}
