import RecipeCard from "../../components/Sections/Recipes";


const recipes = [
  {
    title: "Pasta Carbonara",
    desc: "Spaghetti with creamy egg sauce and bacon bits",

  },
  {
    title: "Beef Stroganoff",
    desc: "Tender beef strips in creamy mushroom sauce",
   
  },
  {
    title: "Chicken Parmesan",
    desc: "Crispy breaded chicken with melted cheese and marinara sauce",

  },
  {
    title: "Spicy Tofu Stir-fry",
    desc: "Crispy tofu and mixed vegetables in spicy sauce",

  },
  {
    title: "Salmon with Asparagus",
    desc: "Baked salmon fillet with garlic butter and roasted asparagus",
    
  },
  {
    title: "Mushroom Risotto",
    desc: "Creamy arborio rice with sautéed mushrooms and Parmesan cheese",
    
  },
];

const Services = () => {
  console.log()
  return (
    <>
    <h1>Test</h1>
    <div className="max-w-screen-lg mx-auto mt-12">
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.slice(0, 6).map((recipe, index) => (
          <RecipeCard
            key={index}
            title={recipe.title}
            desc={recipe.desc}
          
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Services;
