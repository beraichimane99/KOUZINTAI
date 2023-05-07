import { FoodItem } from "../../types"
import { useStateValue } from "../context/StateProvider"

// @ts-ignore
export const FilterFood = (type, foodItems) => {
    const [dispatch] = useStateValue()
    return foodItems.filter((item:any) => item.type.toLowerCase() === type.toLowerCase())
}

export const GetFoodById = (id: number) => {
    const [{foodItems}, dispatch] = useStateValue()
    return foodItems?.find((item:FoodItem) => item.id === id)
}
