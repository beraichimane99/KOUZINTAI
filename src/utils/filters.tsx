import { FoodItem } from "../../types"
import { useStateValue } from "../context/StateProvider"

export const FilterFood = (type:string) => {
    const [{foodItems}, dispatch] = useStateValue()
    return foodItems?.filter((item:FoodItem) => item.type.toLowerCase() === type.toLowerCase())
}

export const GetFoodById = (id: number) => {
    const [{foodItems}, dispatch] = useStateValue()
    return foodItems?.find((item:FoodItem) => item.id === id)
}
