import React from "react";
import { Link, useParams } from "react-router-dom";
// import FormEditRecipe from "./FormEditRecipe";
import FormEditRecipe from "../../FormEditRecipe";
import { Boxdetail, DetailFour, Detailhome, Detailone, Detailtwo, Detailthree, Delete} from "./style";


function RecipeDetail({ recipes, loggedin ,deleteRecipe, editRecipe }) {
  const { recipeId } = useParams();
  const [recipeDeleted, setRecipeDeleted] = React.useState(false);

  
  const currRecipe = recipes.filter((recipe) => recipe._id === recipeId);
  const thisRecipe = { ...currRecipe[0] };

  const delRecipe = () => {
    deleteRecipe(thisRecipe._id);
    setRecipeDeleted(true);
  };

  if (recipeDeleted) {
    return (
      <>
        <p>Recipe deleted!</p>
        <Link to="/">Home</Link>
      </>
    );
  }

   return (
    <div>
      <FormEditRecipe thisRecipe={thisRecipe} editRecipe={editRecipe} />
      <Boxdetail>
        <Detailone>
          <img src={`/img/${thisRecipe.image}`} alt={thisRecipe.title} />
        </Detailone>

        <Detailtwo>
          <h1>{thisRecipe.title}</h1>
          </Detailtwo>

        <Detailthree>
          <p>{thisRecipe.description}</p>
          </Detailthree>

        <DetailFour>
        <h3>Adress</h3>
        <p>{thisRecipe.adress}</p>
        
      <h3>Phone:</h3>
      <p>{thisRecipe.phone}</p>
      </DetailFour>

      

     <Detailhome>
     <Link to="/">Home</Link>
     
      </Detailhome>

      <Delete>
      {loggedin && <button onClick={() => delRecipe()}>delete</button>}
      </Delete>
     
     </Boxdetail>
    </div>
  );

  
}

export default RecipeDetail;

